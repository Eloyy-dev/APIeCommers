const { Router } = require("express");

const { userRegister } = require('../Controllers/user.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     tags: [Register]
 *     requestBody:
 *       description: Para registrarte necesitas nombre, email, contraseña
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
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
 *                     $ref: "#/components/schemas/users"
 */
router.post("/users", userRegister);














module.exports = router;



