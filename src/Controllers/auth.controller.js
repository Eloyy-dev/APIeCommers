const authService = require('../Services/auth.service');


const Login = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await authService.login(credentials);
   

    if (result) {
      const { firstname} = result.result;
      const user = { firstname};
      const token = authService.getToken(user);
      user.token = token;
      res.json({ ...user });
    } else {
      res.status(400).json({ message: 'Informacion invalida' })
    }

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Email o passowrd erronea'
    })
  }
}





module.exports = {
  Login,
}