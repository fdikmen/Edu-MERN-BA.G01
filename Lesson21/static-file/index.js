// Created with "node-express" by node-snippets
const express = require('express')
const app = express()
const port = 3000

//Define the view engine
app.set('view engine', 'pug');

//Define the static file path
app.use(express.static('public'));
app.use(express.static('public-2'));

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))