const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    enum: ['cultivate', 'magnify', 'energize']
  },
  reminder: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Reminder', reminderSchema)
