import Login from '../model/login.js';

export const register = async (req,res,next) => {
    const user = req.body;
 
    const newUser = new Login(user)
 
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }

}