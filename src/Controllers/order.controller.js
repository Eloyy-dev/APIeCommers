const orderService = require('../Services/order.service');


const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await orderService.getById(id)
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next({
      status: 400,
      errorContent: error,
      message: 'Revisa el id'
    })
  }
}



module.exports = {
  getOrderById,
}
