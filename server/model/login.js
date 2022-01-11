import mongoose from 'mongoose';

import bcrypt from 'bcrypt';
const saltRounds = 10;

const loginSchema = mongoose.Schema({
      userName: String,
      password: String,
},
{timestamps: true} );

// loginSchema.pre('save', async function preSave(next){
//       const user = this;
//       if(!user.isModified('password')) return next();

//       try{
//             const hash = await bcrypt.hash(user.password, saltRounds);
//             user.password = hash;
//             return next();
//       }
//       catch(err){
//             return next(err);
//       }

// })

// loginSchema.methods.comparePassword = async function comparePassword(candidate){
//       return bcrypt.compare(candidate, this.password);
// }


const login = mongoose.model('login', loginSchema)

export default login;