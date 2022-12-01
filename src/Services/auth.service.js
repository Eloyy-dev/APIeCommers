const users = require('../models/users.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

class authService {

  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const result = await users.findOne({
        where: { email }
      });

      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, result } : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static getToken(data) {
    try {
      const token = jwt.sign(data, process.env.SECRET, {expiresIn: '10min',algorithm: 'HS512',});
      return token;
    } catch (error) {
      throw error;
    }
  }
}


module.exports = authService;