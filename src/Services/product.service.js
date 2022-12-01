const Products = require('../models/product.models');
const Users = require('../models/users.models');
const ProductInCart = require('../models/productsInCart.models');
const Order = require('../models/order.models');
const ProductInOrder = require('../models/productInOrder.models');


class productService {

  static async getAll() {

    try {
      const result = await Products.findAll({
        attributes:{
          exclude:["id"]
        },
        include: {
          model: Users,
          attributes: ["firstname"]
        },
      });

      const productStock = [];
      result.map((product) => {
        if (product.availableQty > 0) {
          productStock.push(product);
        } else {
          return "Empty"
        }
      });

      return productStock;
    } catch (error) {
      throw error
    }

  }

  static async create(newProductInCart) {

    try {
      const result = Products.create(newProductInCart);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addCart(newProduct, id) {
    try {
      const result = ProductInCart.create(newProduct);

      const idOrder = await Order.findOne({
        where: {
          userId: id
        }
      });
      const newOrder = {
        orderId: idOrder.id,
        productId: newProduct.productId,
        price: newProduct.price,
        Quantity: newProduct.Quantity,
        status: newProduct.status
      }
      const productInOrder = await ProductInOrder.create(newOrder)


      return result;
    } catch (error) {
      throw error;
    }
  }




}


module.exports = productService












