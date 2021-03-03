var express = require('express');
var router = express.Router();
var db = require('../database');
 
router.get('/all', function (req, res, next) {
  db.Bracket.findAll()
    .then((brackets) => res.status(200).send(JSON.stringify(brackets)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
}); 

router.get('/:id', function (req, res) {
  const { id } = req.params;
  db.Bracket.findByPk(id)
    .then((bracket) => res.status(200).send(JSON.stringify(bracket)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.put('/', function (req, res) {
  const { name } = req.params;
  db.Bracket.create({
    name,
  })
    .then((bracket) => res.status(200).send(JSON.stringify(bracket)))
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;  
  db.Bracket.destroy({
    where: {
      id,
    },
  })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(JSON.stringify(err)));
});

module.exports = router;
