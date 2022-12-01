const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");


/**
 * @openapi
 * components:
 *   schemas:
 *     productsGet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Eloy
 *         price:
 *           type: integer
 *           example: 2000
 *         availableQty:
 *           type: integer
 *           example: 10
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: integer
 *           example: 1
 *         UrlImg:
 *           type: string
 *           example: https://www.el-pentagono.com.ar/mods/html/fil/Model/Product/2890/6113e3960df0a-1.jpg.webp
 *         firtsname:
 *           type: string
 *           example: Eloy
 *     productnew:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Sarten
 *         price:
 *           type: integer
 *           example: 2000
 *         availableQty:
 *           type: integer
 *           example: 10
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: integer
 *           example: 1
 *         UrlImg:
 *           type: string
 *           example: https://www.el-pentagono.com.ar/mods/html/fil/Model/Product/2890/6113e3960df0a-1.jpg.webp
 *     productsCreate:
 *       type: object
 *       properties:
 *         Message:
 *           type: string
 *           example: Producto creado
 * 
 *     productsCart:
 *       type: object
 *       properties:
 *         Message:
 *           type: string
 *           example: Producto agregado al carrito
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */







const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },
    UrlImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    timestamps: false,
    updatedAt: false,
  }
);

module.exports = Product;