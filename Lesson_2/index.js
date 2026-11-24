const express = require('express')

const app = express();


// Sample in-memory data
let users = [
    { id: 1, name: 'Ayaan' },
    { id: 2, name: 'Fatima' },
    { id: 3, name: 'Zubeyr' }
]

app.use(express.json())

// get users
app.get('/users', (req, res) => {
    res.json(users)
})

// get one user 
app.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id))
    if (!user) return res.status(404).json('user is not found')
    res.json(user)
})

// post one user
app.post('/users', (req, res) => {
    const userData = req.body

    const newUser = {
        id: users.length + 1,
        name: userData.name
    }

    users.push(newUser)
    res.status(201).json(newUser)
})



// 2 update user

app.put('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id))
    if (!user) return res.status(404).json('user is not found')
    user.name = req.body.name
    res.json(user)
})

app.delete('/users/:id', (req, res) => {
    const user = users.filter((u) => u.id != Number(req.params.id))
    res.send(`user id ${req.params.id} is deleted`)
})


app.listen(3000, (req, res) => {
    console.log('✅server is running at htpp//:localhost:3000')
})

