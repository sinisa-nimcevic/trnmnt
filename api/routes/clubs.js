var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/all', function (req, res, next) {
  db.Club.findAll()
    .then((clubs) => res.status(200).send(JSON.stringify(clubs)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  db.Club.findByPk(id)
    .then((club) => res.status(200).send(JSON.stringify(club)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.put('/', function (req, res) {
  const { name } = req.params;
  db.Club.create({
    name,
  })
    .then((club) => res.status(200).send(JSON.stringify(club)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  db.Club.destroy({
    where: {
      id,
    },
  })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

module.exports = router;
