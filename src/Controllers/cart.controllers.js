const cartService = require('../Services/cart.service');
const User = require('../models/users.models');
const transporter = require('../utils/mailer');

const getCartById = async (req, res, next) => {

  try {
    const { id } = req.params
    const result = await cartService.getById(id);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Revisa el Id'
    })
  }
}

const purchaseCart = async (req, res, next) => {

  try {
    const { id } = req.params
    const result = await cartService.purchase(id);
    const user = await User.findOne({
      where: {
        id: id
      },
    });

    res.status(201).json({ message: "Carrito comprado" });

    transporter.sendMail({
      from: "<eloygamer10@gmail.com>",
      to: user.email,
      subject: "Compra hecha",
      text: "Tu compra ah sido realizada"
    });



  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Revisa el Id'
    })
  }
}






module.exports = {
  getCartById,
  purchaseCart
}
