const express = require('express');
const path = require('path');
const { createServer } = require('http');

const initWebsockets = require('./systemMonitor.websocket');
const config = require('../config');

const app = express();
const httpServer = createServer(app);

// Static routes
app.use('/system-monitor/', express.static(path.join(__dirname, '../public')));

// Init websockets connection
initWebsockets(httpServer);

httpServer.listen(config.port, config.host, () => {
  console.log(`System monitor listen in port ${config.port}`);
});

