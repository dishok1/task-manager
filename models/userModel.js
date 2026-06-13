import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true, // Исправлено: required вместо require
    unique: true,
  },
  email: {
    type: String,
    required: true, // Исправлено: required вместо require
    unique: true,
  },
  password: {
    type: String,
    required: true, // Исправлено: required вместо require
  },
  role: {
    type: String,
    default: 'user', //admin
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
