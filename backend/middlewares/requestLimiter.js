import { rateLimit } from 'express-rate-limit';

export default (requestRate, timeLimit) => {
  return rateLimit({
    windowMs: timeLimit,
    max: requestRate,
    message: 'Too many requests, please try again',
  });
}