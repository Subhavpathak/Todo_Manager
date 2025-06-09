const mongoose = require('mongoose')

// Define the schema (structure) of a Todo item
const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

// Export the model to use in routes
module.exports = mongoose.model('Todo', TodoSchema)
