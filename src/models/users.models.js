const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Eloy
 *         email:
 *           type: string
 *           example: eloy@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Eloy
 *         email:
 *           type: string
 *           example: eloy@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     ingreso:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: eloy@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Eloy
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJGYWN1bmRvIiwiZW1haWwiOiJmYWN1QGdtYWlsLmNvbSIsImlkIjo2LCJpYXQiOjE2Njk4NTQwNDMsImV4cCI6MTY2OTg1NDY0M30.iHpoUeoza6nz-f-FESbfoumZdCeH2ocTQlKWZu1K1vBRYA3XHNaYZU4xCSIzLq5CzEe_1jJqE9XnwCG9-0e2cw
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
*/

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;