const { Router } = require('express');

const router = Router();

router.use('/enums', require('./routes/Enums'));

router.use('/locations', require('./routes/Location'));

module.exports = router;
