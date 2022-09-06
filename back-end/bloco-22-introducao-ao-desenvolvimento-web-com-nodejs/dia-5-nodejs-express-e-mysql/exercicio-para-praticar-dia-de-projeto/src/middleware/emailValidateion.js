const emailValidation = (req, res, next) => {
  console.log('4- Agora passamos pelo middleware.js pois temos um middleware na requisição onde ele é chamado, desta forma a requisição começa por ele!');

  const { email } = req.body;
  if(!email) {
    return res.status(400).json({ "message": "invalid data" })
  }

  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
  const testRegex = regex.test(email);

  if(!testRegex) {

    return res.status(400).json({ "message": "invalid data" })
  }
  next();
};

module.exports = emailValidation;