const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => res.send('Got a GET request contact'))
router.post('/contact', (req, res) => res.send('Got a POST request contact'))
router.put('/contact', (req, res) => res.send('Got a PUT request contact'))
router.delete('/contact', (req, res) => res.send('Got a DELETE request contact'))


module.exports = router;