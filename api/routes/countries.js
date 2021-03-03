var express = require('express');
var router = express.Router();
var countries = require('../controllers/countries');
const { responseHandler } = require('../common/helpers');

router.get('/:code', async function (req, res) {
  const { code } = req.params;
  const result = await countries.getCountryByCode(code);
  
  responseHandler(result, res);
});

module.exports = router;
