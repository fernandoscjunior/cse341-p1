const router = require('express').Router();

router.use('/contacts', require('./users'));

module.exports = router;