import  React, { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CreateStudent() {


   const [student, setStudent] = useState({
       regNo: 0,
       studentName: '',
       grade: '',
       section: ''
   })

const  handleChange = (e) => {

setStudent({
    ...student,
    [e.target.name]: e.target.value
})

}

const handleCreate = () => {

    axios.post('http://localhost:4100/students', student).then(() =>  {
        window.location.reload(true);
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
