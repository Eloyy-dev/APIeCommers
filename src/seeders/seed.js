const db = require('../utils/database');
const User = require('../models/users.models');
const Product = require('../models/product.models');
const Cart = require('../models/cart.models');
const Order = require('../models/order.models');
const ProductInCart = require('../models/productsInCart.models');
const ProductInOrder = require('../models/productInOrder.models');


const initModels = require('../models/initModels');
// const { async } = require('seed/lib/seed');

initModels();
const user = [
  {
    firstname: "Eloy",
    email: "e@gmail.com",
    password: "1234",
  },
  {
    firstname: "Guillermo",
    email: "g@gmail.com",
    password: "1234",
  },
  {
    firstname: "Vanessa",
    email: "v@gmail.com",
    password: "1234",
  },
  {
    firstname: "agustis",
    email: "a@gmail.com",
    password: "1234",
  },
  {
    firstname: "Miguel",
    email: "m@gmail.com",
    password: "1234",
  }
];

const product = [
  {
    name: "iphone 13",
    price: 20000,
    availableQty: 23,
    status: true,
    userId: 1,
    UrlImg: "asdasd"
  },
  {
    name: "iphone 14",
    price: 30000,
    availableQty: 24,
    status: true,
    userId: 2,
    UrlImg: "asdasd"
  },
  {
    name: "ipad Pro 11",
    price: 13000,
    availableQty: 21,
    status: true,
    userId: 3,
    UrlImg: "asdasd"
  },
  {
    name: "MacBook Air 2022",
    price: 23000,
    availableQty: 22,
    status: true,
    userId: 4,
    UrlImg: "asdasd"
  },
  {
    name: "Air pods Pro 3",
    price: 8000,
    availableQty: 23,
    status: true,
    userId: 5,
    UrlImg: "asdasd"
  },

];
const order = [
  {
    userId: 1,
    totalPrice: 20000,
    status: true,
  },
  {
    userId: 2,
    totalPrice: 30000,
    status: true,
  },
  {
    userId: 3,
    totalPrice: 13000,
    status: true,
  },
];
const cart = [
  {
    userId: 4,
    totalPrice: 23000,
    status: true,
  },
  {
    userId: 5,
    totalPrice: 8000,
    status: true,
  },

];
const productInCart = [
  {
    cartId: 1,
    productId: 4,
    price: 23000,
    Quantity: 1,
    status: true
  },
  {
    cartId: 2,
    productId: 5,
    price: 8000,
    Quantity: 1,
    status: true
  }
];
const productInOrder = [
  {
    orderId: 1,
    productId: 1,
    price: 20000,
    Quantity: 1,
    status: false
  },
  {
    orderId: 2,
    productId: 2,
    price: 30000,
    Quantity: 1,
    status: false
  },
  {
    orderId: 3,
    productId: 3,
    price: 13000,
    Quantity: 1,
    status: false
  },

];
db.sync({ force: false }).then(() => {
  console.log("seed plantada")
  user.forEach(async (user) => await User.create(user));

  setTimeout(() => {
    product.forEach(async (prod) => await Product.create(prod));
  }, 100);

  setTimeout(() => {
    order.forEach(async (ord) => await Order.create(ord));
  }, 200);

  setTimeout(() => {
    cart.forEach(async (cart) => await Cart.create(cart));
  }, 300);

  setTimeout(() => {
    productInCart.forEach(async (prodcart) => await ProductInCart.create(prodcart));
  }, 400);

  setTimeout(() => {
    productInOrder.forEach(async (prodorder) => await ProductInOrder.create(prodorder));
  }, 500);
})