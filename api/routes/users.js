var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/all', function (req, res, next) {
  db.User.findAll()
    .then((users) => res.status(200).send(JSON.stringify(users)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  db.User.findByPk(id)
    .then((user) => res.status(200).send(JSON.stringify(user)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.put('/', function (req, res) {
  const { firstName, lastName } = req.params;
  db.User.create({
    firstName,
    lastName,
  })
    .then((user) => res.status(200).send(JSON.stringify(user)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  db.User.destroy({
    where: {
      id,
    },
  })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

module.exports = router;
