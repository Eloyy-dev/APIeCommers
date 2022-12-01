const { Router } = require("express");

const { getProduct, createProduct, addProducInCart } = require('../Controllers/product.controller');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();
/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/productsGet"
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     requestBody:
 *       description: Para registrarte necesitas nombre, email, contraseña
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/productnew"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/productsCreate"
 * /api/v1/products/addCart/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/productsCart"
 */

router.get("/products", authenticate, getProduct);

router.post('/products', authenticate, createProduct);

router.post('/products/addCart/:userId', authenticate, addProducInCart);












module.exports = router;