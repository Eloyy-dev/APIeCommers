const ProductInOrder = require('../models/productInOrder.models');
const Order = require('../models/order.models');

class orderService {

  static async getById(id) {

    try {
      const orderId = await Order.findOne({
        where: {
          userId: id
        }
      });

      const result = await ProductInOrder.findAll({
        where: {
          order_id: orderId.id
        },
        attributes:{
          exclude:["id", "orderId"]
        }
      })

      return result;
    } catch (error) {
      throw error;
    }
  }




}


module.exports = orderService;












