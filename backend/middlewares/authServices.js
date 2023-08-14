import { verifyJwt } from '../cryptography/jwt.js';
import db from '../db/remoteDB.js';
import config from '../utils/config.js';

export default async (req, res, next) => {
  if(config.env === 'dev') return next();

  const linkLogin = "https://novaprog.dev/login";
  const token = req.cookies?.user;
  if(!token) return res.redirect(linkLogin);

  const result = verifyJwt(token, config.services.jwtSecret);
  if(!result) return res.redirect(linkLogin);

  try{
    const { error, body } = await db.query("users", { email: result.sub });
    if(error || body.length <= 0) return res.redirect(linkLogin);
    if(!body[0].verified) return res.redirect(linkLogin);

    req.user = { ...body[0] };
    next();

  } catch {
    return res.redirect(linkLogin);
  }
}
