// Require express doc
const express = require('express')

// Require passport
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const Reminder = require('../models/reminder')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET request
router.get('/reminders', requireToken, (req, res, next) => {
  Reminder.find()
    .then(reminders => {
      // 'reminders' will be an array of Mongoose documents, to conver each one to a POJO we use '.map' to apply '.toObject' to each one
      return reminders.map(reminder => reminder.toObject())
    })
    // responds with a status of 200 and a JSON of the reminders
    .then(reminders => res.status(200).json({ reminders }))
    // if an error occurs, it'll be passed to an error handler
    .catch(next)
})

// SHOW
// GET request to 1 specific 'id'
router.get('reminders/:id', requireToken, (req, res, next) => {
  // req.params.id is set based on the ':id' in the route
  Reminder.findById(req.params.id)
    .then(handle404)
    // if 'findById' is succesfull, a response with a status of 200 and a JSON of the 'reminder'
    .then(reminder => res.status(200).json({ reminder: reminder.toObject() }))
    // if an error occurs, it'll be passed to an error handler
    .catch(next)
})

module.exports = router
