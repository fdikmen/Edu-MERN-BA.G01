const express = require('express')
const app = express()
const port = 3000


//View Engine
app.set('view engine', 'pug')

app.get('/users', (req, res,next) => {
    const user=false;
    if(user){
        res.send('Yes. You are logged in!')
    }
    //res.render('error',{status:404, message:'User not found'})
    next()
    
})

//Middleware
/*const auth = (req, res, next) => {
    const isAuthorized = true
    if (isAuthorized) {
        next()
    } else {
        res.send('Unauthorized. Please login first')
    }
}
*/
const isAuth = require('./helper/isAuth')


// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index'))

const about = require('./routes/about')

// app.use('/about', isAuth)

app.use(about)
/*
app.get('/about', (req, res) => res.send('Got a GET request about'))
app.post('/about', (req, res) => res.send('Got a POST request about'))
app.put('/about', (req, res) => res.send('Got a PUT request about'))
app.delete('/about', (req, res) => res.send('Got a DELETE request about'))
*/

/*
app.get('/contact', (req, res) => res.send('Got a GET request contact'))
app.post('/contact', (req, res) => res.send('Got a POST request contact'))
app.put('/contact', (req, res) => res.send('Got a PUT request contact'))
app.delete('/contact', (req, res) => res.send('Got a DELETE request contact'))
*/
const contact = require('./routes/contact')
// app.use([prefix],[Route File])
app.use('/api',contact)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))