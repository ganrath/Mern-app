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

export const login = async (req,res,next) => {
    const user = req.body;

 
    try{
         Login.find({ userName : user.userName },function(err,data){
            if(!err & data.length > 0){
            req.session.isAuth = true;
            req.session.user = user;
            res.status(201).json({message : true});
            //res.redirect("/student");
            }
            else{
                res.status(201).json({message : false}); 
            }
         });
       
    }
    catch(err){
        res.status(404).json({message: err.message});
    }

}