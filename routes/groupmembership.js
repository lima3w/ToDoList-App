const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(req.baseUrl + req.path)
});

module.exports = router;