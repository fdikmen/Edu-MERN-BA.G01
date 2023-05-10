const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!<br/> Home Page');
    }
);

app.get('/about', (req, res) => {
    res.send('Hello Express!<br/> About Page');
    }
);


app.listen(3000, () => 
{ console.log('Server is running...') });