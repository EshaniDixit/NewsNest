require('dotenv').config();

module.exports = {
    app: {
        port: process.env.DEV_APP_PORT || 3000,
        appName: process.env.APP_NAME || 'Converter',
        env: process.env.NODE_ENV || 'development',
    },
}