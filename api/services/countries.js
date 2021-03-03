const axios = require('axios');
const countriesAPI = 'https://restcountries.eu/rest/v2';

const getCountryByCode = async (code) => {
  let data = null;
  let error = null;
  let status = 200;
  
  await axios
    .get(`${countriesAPI}/alpha/${code}?fields=name;flag`)
    .then((res) => {
      data = res.data;
      status = 200;
    })
    .catch((err) => {
      error = err;
      status = 500;
    });

  return {
    status,
    data,
    error,
  };
};

module.exports = {
  getCountryByCode,
};
