const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => res.send('Got a GET request about'))
router.post('/about', (req, res) => res.send('Got a POST request about'))
router.put('/about', (req, res) => res.send('Got a PUT request about'))
router.delete('/about', (req, res) => res.send('Got a DELETE request about'))

module.exports = router;