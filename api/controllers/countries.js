const countries = require('../services/countries');

const getCountryByCode = async (code) => {
  return await countries.getCountryByCode(code);
};

module.exports = {
  getCountryByCode,
};
