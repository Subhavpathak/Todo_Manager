require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')       // Add this line
const todosRoutes = require('./routes/todos')

const app = express()

app.use(cors())                    // Enable CORS for all requests
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err))

app.use('/api/todos', todosRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
