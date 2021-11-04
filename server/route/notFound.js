const express = require('express');

const router = express.Router();

// handler for responding to a request that has not been handled
router.all('/', (req, res) => {
    return res.status(404).json({
        status: 404,
        message: 'failure'
    })
});

module.exports = router