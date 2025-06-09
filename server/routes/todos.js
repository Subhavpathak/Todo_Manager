const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 })
  res.json(todos)
})

// Create a todo
router.post('/', async (req, res) => {
  const { text } = req.body
  const todo = new Todo({ text })
  await todo.save()
  res.status(201).json(todo)
})

// Toggle completed
router.patch('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  todo.completed = !todo.completed
  await todo.save()
  res.json(todo)
})

// Delete
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
})

module.exports = router
