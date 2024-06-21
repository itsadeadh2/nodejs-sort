const express = require('express')
const router = express.Router()
const sort = require('../domain/sort')


router.post('/sort', (req, res) => {
    const result = sort(req.body);
    res.json(result);
})

module.exports = router