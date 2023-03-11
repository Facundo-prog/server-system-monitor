const { Router } = require('express');
const { getSystemInfo, getRealtimeInfo } = require('../services/system');

const router = Router();
  
router.get('/', async (rea, res) => {
  const data = await getSystemInfo();
  res.json(data);
});

router.get('/realtime', async (rea, res) => {
  const data = await getRealtimeInfo();
  res.json(data);
});

module.exports = router;