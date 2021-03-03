const responseHandler = (obj, res) => res.status(obj.status).send(obj.error ? obj.error : obj.data);

const invalidRequestRespObject = {
  status: 500,
  error: 'Invalid request',
};

module.exports = {
  responseHandler,
  invalidRequestRespObject,
};
