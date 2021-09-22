import StudentData from '../model/student.js';

export const getStudents = async (req,res) => {
    try{
       const allStudents =  await StudentData.find();
       res.status(200).json( allStudents);
    }
    catch(err){
          res.status(404).json({message: err.message});
    }
 
    }

    export const createStudent =  async (req,res) => {
        const student = req.body;
        if (student.section.length == 0 ) {
            student.section = undefined;
        }
        const newStudent = new StudentData(student)
     
        try{
            await newStudent.save();
            res.status(201).json(newStudent);
        }
        catch(err){
            res.status(404).json({message: err.message});
        }
    }