const express = require('express')
const app = express()
const port = 3000

// GET - POST - PUT - DELETE - ALL
app.get('/', (req, res) => res.send('Got a GET request'))

app.post('/', (req, res) => res.send('Got a POST request'))

app.put('/', (req, res) => res.send('Got a PUT request'))

app.delete('/', (req, res) => res.send('Got a DELETE request'))
// ? means optional
app.get('/co?nt?act', (req, res) => res.send('Got a GET request for /contact'))

app.get('/a(bou)?t', (req, res) => res.send('Got a GET request for /about'))
// * means zero or more
app.get('/messa*e', (req, res) => res.send('Got a GET request for /message'))

// + means one or more
app.get('/pro+file', (req, res) => res.send('Got a GET request for /profile'))

// Operator Merge Parameters
app.get('/who?is+i*t', (req, res) => res.send('Got a GET request for /whoisit'))


// ALL means all methods
app.all('/secret', (req, res) => { res.send(`Got a ${req.method} request for /secret`) })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))