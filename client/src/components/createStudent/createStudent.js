import  React, { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  { postStudentAction } from '../../features/student'; 
import { useDispatch } from "react-redux";
import { useFormik, ErrorMessage , Form} from 'formik';
import { Formik, Field, Form,  } from 'formik';
import * as Yup from 'yup';



export default function CreateStudent() {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues:{
     regNo:'',
    studentName: '',
    password:'',
    confirmPassword:'',
    email: '', 
    mobile:'',
    Country: '',
  },
  validaionSchema: Yup.object({
     regNo:Yup.mixed()
    .max(6,'Must be 6 Character or less')
    .required('Required'),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  }) 
})
   const [student, setStudent] = useState({
  
   })

const  handleChange = (e) => {

setStudent({
    ...student,
    [e.target.name]: e.target.value
})

}

const handleCreate = () => {
  dispatch(postStudentAction(student));
}

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h2>Create Student</h2>
    
      <TextField id="outlined-basic" label="Registration No." variant="outlined"  name="regNo" value={student.regNo} onChange={(e) => handleChange(e)}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" name="studentName" value={student.studentName} onChange={(e) => handleChange(e)}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" name="grade" value={student.grade} onChange={(e) => handleChange(e)}/>
      <TextField id="outlined-basic" label="Section" variant="outlined"  name="section" value={student.section} onChange={(e) => handleChange(e)}/>
  
      <Button variant="contained" color="primary" onClick={handleCreate}>Create</Button>
    </Box>
  );
}
