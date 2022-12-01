const user = require('../models/users.models');
const Cart = require('../models/cart.models');
const Order = require('../models/order.models');
class userService {

  static async create(newUser) {
    try {
      const result = await user.create(newUser);

      const newCart = {
        userId: result.id,
        totalPrice: 0,
        status: false
      }
      const newOrder = {
        userId: result.id,
        totalPrice: 0,
        status: false
      }
      await Cart.create(newCart);
      await Order.create(newOrder);
      
      return result;
    } catch (error) {
      throw error
    }
  }












}


















module.exports = userService;