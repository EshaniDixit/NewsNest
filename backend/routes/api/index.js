const router = require('express').Router();

router.use('/news', require('./newsRoute'));

module.exports = router;