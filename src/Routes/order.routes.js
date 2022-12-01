const { Router } = require("express");


const { getOrderById } = require('../Controllers/order.controller');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

/**
 * @openapi
 * /api/v1/order/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: order Id
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
 *                     $ref: "#/components/schemas/orderGET"
 */


router.get('/order/:id',authenticate, getOrderById)









module.exports = router;