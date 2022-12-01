const jwt = require('jsonwebtoken');

const authVerification = (req, res, next) => {

  try {
    const { userId } = req.params;
    let token = req.headers.authorization;
    token = token.replace('Bearer ', '');
    const isValid = jwt.verify(token, 'ecommers', { algorithms: "HS512" });
    const { id } = isValid;
    if (isValid) {
      next();
    }
  } catch (error) {
    console.log(error);
    next({
      status: 400,
      errorContent: error,
      message: 'Necesitas un token'
    })
  }



}



module.exports = authVerification;








