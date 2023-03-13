const serverless = require('@serverless-devs/fc-http')
const app = require('./dist/app.js')

exports.handler = serverless(app)
