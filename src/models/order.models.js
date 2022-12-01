const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");


/**
 * @openapi
 * components:
 *   schemas:
 *     orderGET:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1
 *         price:
 *           type: integer
 *           example: 2000
 *         Quantity:
 *           type: integer
 *           example: 1
 *         status:
 *           type: boolean
 *           example: true
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
*/




const Order = db.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    updatedAt: false,
  }
);

module.exports = Order;