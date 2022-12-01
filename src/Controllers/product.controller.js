const productService = require('../Services/product.service');


const getProduct = async (req, res, next) => {

  try {
    const result = await productService.getAll();
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Revisa los datos'
    })
  }
}

const createProduct = async (req, res, next) => {

  try {
    const newObj = req.body;
    const result = await productService.create(newObj);
    res.status(201).json({message:"Producto creado"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Revisa los datos'
    })
  }
}

const addProducInCart = async (req, res, next) => {

  try {
    const { userId } = req.params;
    const newProductInCart = req.body;
    const result = await productService.addCart(newProductInCart, userId);
    res.status(201).json({message:`Producto agregado al carrito de id: ${result.cartId}`});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Revisa los datos'
    })
  }
}







module.exports = {
  getProduct,
  createProduct,
  addProducInCart
}
