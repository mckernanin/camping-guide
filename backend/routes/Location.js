const { Router } = require('express');
const Location = require('../models/Location');

const router = Router();

// Simple helper method for handling requests
const handleRequest = res => (err, response) => {
  if (err) return res.status(err.status || 500).send(err);

  return res.status(200).send(response || {});
};

router.get('/', (req, res) => Location.find({}, handleRequest(res)));

router.get('/:location', (req, res) => Location.find({ _id: req.params.location }, handleRequest(res)));

router.post('/', (req, res) => {
  const loc = new Location(req.body);

  return loc.save(handleRequest(res));
});

router.put('/:location', (req, res) =>
  Location.findOneAndUpdate(
    { _id: req.params.location },
    req.body,
    handleRequest(res)
  )
);

router.delete('/:location', (req, res) => Location.remove({ _id: req.params.location }, handleRequest(res)));

module.exports = router;
