import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
      _id: String, 
      userName: String,
      password: String,
      timestamps: true
});

const login = mongoose.model('Users', userSchema)

export default login;