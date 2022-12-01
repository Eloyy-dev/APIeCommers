const Cart = require('./cart.models');
const Product = require('./product.models');
const ProductInOrder = require('./productInOrder.models');
const ProductInCart = require('./productsInCart.models');
const Users = require('./users.models');
const Order = require('./order.models');

const initModels = () => {

  Cart;
  Product;
  ProductInOrder;
  ProductInCart;
  Users;
  Order;

  Users.hasMany(Cart);
  Cart.belongsTo(Users);

  Users.hasMany(Product);
  Product.belongsTo(Users);

  Users.hasMany(Order);
  Order.belongsTo(Users);

  Product.hasMany(ProductInCart);
  ProductInCart.belongsTo(Product);

  Cart.hasMany(ProductInCart);
  ProductInCart.belongsTo(Cart);

  Order.hasMany(ProductInOrder);
  ProductInOrder.belongsTo(Order);

  Product.hasMany(ProductInOrder);
  ProductInOrder.belongsTo(Product);


  Product.belongsToMany(Cart, { through: ProductInCart });
  Cart.belongsToMany(Product, { through: ProductInCart });








}




















module.exports = initModels;


