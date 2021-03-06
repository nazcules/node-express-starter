'use strict'
const router = require('express').Router()

module.exports = (app) => {
  // Default router
  app.get('/', (req, res) => {
    return res.status(404).send({
      code: 200,
      status: 'success',
      message: 'Welcome to this API'
    })
  })

  // All router
  app.use('/v1', require('./auth')(router))
  app.use('/v1', require('./admin')(router))
  app.use('/v1', require('./user')(router))

  // Router not found
  app.use((req, res) => {
    return res.status(404).send({
      code: 404,
      status: 'error',
      message: 'There is no API endpoint'
    })
  })
}
