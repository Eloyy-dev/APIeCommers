const { Router } = require("express");

const { Login } = require('../Controllers/auth.controller');


const router = Router();

/**
 * @openapi
 * api/v1/auth/login:
 *   post:
 *     tags: [Login]
 *     requestBody:
 *       description: Para logearte ingresa email y contraseña
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/ingreso"
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
 *                     $ref: "#/components/schemas/login"
 */




router.post("/auth/login", Login);


module.exports = router;