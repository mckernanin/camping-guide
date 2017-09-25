const { Router } = require('express');
const bodyParser = require('body-parser');
const Location = require('../models/Location');
const CRUD = require('../controllers/CRUDController');

const router = Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', CRUD.getAll(Location));

router.get('/:id', CRUD.getOne(Location));

router.post('/', CRUD.create(Location));

router.put('/:id', CRUD.update(Location));

router.delete('/:id', CRUD.delete(Location));

module.exports = router;
