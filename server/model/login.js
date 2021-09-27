import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
      userName: String,
      password: String,
      timestamps: true
});

const login = mongoose.model('login', loginSchema)

export default login;