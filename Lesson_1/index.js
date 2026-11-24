const express = require('express')

const app = express();

app.use(express.json());

// 1. GET DATA
app.get('/users', (req, res) => {
    res.send("hellow welcome to express !")
})

// 2. POST DATA 
app.post('/users', (req, res) => {
    console.log("req.body info", req.body)
    const userData = req.body
    res.send(userData)
})

// 3. PUT DATA UPDATE

app.put('/users/:id', (req, res) => {
    const userId = req.params.id
    const userData = req.body
    res.send(`user id ${userId} is upadted with ${userData.email}`)
})

// 4. DELETE DATA
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    // const userData = req.body
    res.send(`user ${userId} is deleted`)
})

app.listen(3000, () => {
    console.log("✅ server is running on http://localhost:3000")
})