const userService = require('../Services/user.service');
const transporter = require('../utils/mailer');

const userRegister = async (req, res, next) => {

  try {
    const newUser = req.body;
    const result = await userService.create(newUser);
    const { firstname, email } = result;
    const resultFinal = {
      firstname: firstname,
      email: email
    }
    res.status(201).json(resultFinal);

    transporter.sendMail({
      from: "<eloygamer10@gmail.com>",
      to: result.email,
      subject: "Welocme al E-commersemlo",
      text: "Tu usuario ha sido registrado"
    });

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Revisa los datos'
    })
  }
}



















module.exports = {
  userRegister,
}
