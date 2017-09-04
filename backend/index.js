const { Router } = require('express');

const router = Router();

router.use('/enums', require('./routes/Enums'));

router.use('/locations', require('./routes/Location'));
router.use('/users', require('./routes/User'));
router.use('/auth', require('./routes/Auth'));

module.exports = router;
