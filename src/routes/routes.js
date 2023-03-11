const { Router } = require('express');
const { getSystemInfo, getRealTimeInfo } = require('../services/system');

const router = Router();
  
router.get('/', async (rea, res) => {
  const data = await getSystemInfo();
  res.json(data);
});

router.get('/realtime', async (rea, res) => {
  const data = await getRealTimeInfo();
  res.json(data);
});

module.exports = router;