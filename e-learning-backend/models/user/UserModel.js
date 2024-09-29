const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

class User {
  constructor() {
    const userSchema = new mongoose.Schema({
      userID: { type: Number },
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ['Admin', 'Teacher', 'Student'], required: true }
    }, 
    { discriminatorKey: 'role' }); // for inheritance

    // Auto Increment for userID
    userSchema.plugin(AutoIncrement, { inc_field: 'userID' });

    // Create User model
    this.User = mongoose.model('User', userSchema);
  }

  getModel() {
    return this.User;
  }
}

module.exports = User;
