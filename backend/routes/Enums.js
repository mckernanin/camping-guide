const { Router } = require('express');
const Enums = require('../enums');

const router = Router();

router.get('/', (req, res) => res.send(Enums));

module.exports = router;
