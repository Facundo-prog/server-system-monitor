import { Router } from 'express';
import config from '../config/config.js';
import path from 'path';

const router = Router();
const root = path.join(config.rootPath, './views/index.html');

router.get('/', (req, res) => {
  res.sendFile(root);
});

export default router;