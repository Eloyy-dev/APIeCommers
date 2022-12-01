const Products = require('../models/product.models');
const Users = require('../models/users.models');
const ProductInCart = require('../models/productsInCart.models');
const Cart = require('../models/cart.models');
class cartService {


  static async getById(id) {

    try {
      const idCart = await Cart.findOne({
        where: {
          userId: id
        }
      });
      const result = await ProductInCart.findAll({
        where: {
          cartId: idCart.id
        },
        attributes:{
          exclude:["id", "cartId"]
        }
        
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async purchase(id) {
    try {
      const cartId = await Cart.findOne({
        where: {
          userId: id
        }
      })
      
      const updProduct = await ProductInCart.update({
        status: true
      }, { where: { cartId: cartId.id } }
      )
      
      const cartUser = await Cart.update({
        status: "purchased"
      }, { where: { userId: id } }
      )
      return cartUser;
    } catch (error) {
      throw error;

    }
  }





}
module.exports = cartService;