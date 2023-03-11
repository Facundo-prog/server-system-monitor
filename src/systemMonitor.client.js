const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('../config');
const routes = require('./routes/routes');

const app = express();

// Cors
const corsOptions = cors({ origin: 'http://localhost' });
app.use(corsOptions);

// Parse json body
app.use(express.json());

// Routes
app.use('/system-monitor/api/v1', routes);

// Static routes
app.use('/system-monitor/', express.static(path.join(__dirname, '../public')));

app.listen(config.port, config.host, () => {
  console.log(`System monitor listen in port ${config.port}`);
});

