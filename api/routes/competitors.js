var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/all', function (req, res, next) {
  db.Competitor.findAll()
    .then((competitors) => res.status(200).send(JSON.stringify(competitors)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  db.Competitor.findByPk(id)
    .then((competitor) => res.status(200).send(JSON.stringify(competitor)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.put('/', function (req, res) {
  const { fullName } = req.params;
  db.Competitor.create({
    fullName,
  })
    .then((competitor) => res.status(200).send(JSON.stringify(competitor)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  db.Competitor.destroy({
    where: {
      id,
    },
  })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

module.exports = router;
