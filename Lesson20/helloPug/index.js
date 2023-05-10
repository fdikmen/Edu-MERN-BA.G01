//Created by "node-express" snippet in VS Code
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => res.render('index'))
app.get('/', (req, res) => res.render('index',{title: 'Hey', message: 'Hello there!',phone: '+1234567890'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
