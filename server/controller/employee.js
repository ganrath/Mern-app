import Employee from '../model/Employee.js';

export const employee = async (req,res,next) => {
    const user = req.body;
    const newUser = new Employee(user)
 
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }

}

export const employeeData = async (req,res,next) => {

    try{
        const EmployeeData =  await Employee.find({ designation : req.body.designation});


        res.status(200).json( EmployeeData);
     }
     catch(err){
           res.status(404).json({message: err.message});
     }

}