import  React, { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json'
    }
});



export default function CreateStudent() {


   const [student, setStudent] = useState({
       regNo: 12,
       studentName: 'SSSS',
       grade: 'D',
       section: 'C'
   })

const  handleChange = (e) => {

setStudent({
    ...student,
    [e.target.name]: e.target.value
})

}

const handleCreate = () => {

  instance.post('/api', student, { crossdomain: true }).then(() =>  {
       // window.location.reload(true);
    });
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
