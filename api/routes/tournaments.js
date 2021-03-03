var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/all', function (req, res, next) {
  db.Tournament.findAll()
    .then((tournaments) => res.status(200).send(JSON.stringify(tournaments)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
}); 

router.get('/:id', function (req, res) {
  const { id } = req.params;
  db.Tournament.findByPk(id)
    .then((tournament) => res.status(200).send(JSON.stringify(tournament)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.put('/', function (req, res) {
  const { name } = req.body;
  db.Tournament.create({
    name,
  })
    .then((tournament) => res.status(200).send(JSON.stringify(tournament)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  db.Tournament.destroy({
    where: {
      id,
    },
  })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

module.exports = router;
