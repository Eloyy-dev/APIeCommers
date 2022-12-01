const { Router } = require("express");


const { getCartById, purchaseCart } = require('../Controllers/cart.controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();


/**
 * @openapi
 * /api/v1/cart/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart Id
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
 *                     $ref: "#/components/schemas/Cart"
 * /api/v1/cart/{id}/purchase:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart Id
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
 *                     $ref: "#/components/schemas/Purchases"
 */


router.get("/cart/:id", authenticate, getCartById)

router.get("/cart/:id/purchase", authenticate, purchaseCart)








module.exports = router;