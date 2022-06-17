const express = require('express')
const app = express()
const todo = require('./routes/todo');

const port = 3000


// routes
app.get('/hello', (req, res) => {
    res.send('Hello World')
})

// middleware
app.use('/api/v1/todo', todo)

app.listen(port, console.log(`server is listening on port ${port}...`))