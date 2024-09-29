const BaseUser = require('./UserModel');
const mongoose = require('mongoose');

class AdminUser extends BaseUser {
  constructor() {
    super();
    this.Admin = this.User.discriminator('Admin', new mongoose.Schema({}));
  }

  getModel() {
    return this.Admin;
  }
}

module.exports = AdminUser;
