require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost'
}

module.exports = config;