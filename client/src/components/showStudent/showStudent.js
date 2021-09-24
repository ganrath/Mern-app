import  React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Student = () => {
  const [grade, setGrade] = useState('');
  const [data, setData] = useState([]); 


  const handleChange = (event) => {
    setGrade(event.target.value);
    console.log(event.target.value, 'ss', grade);
  
  
  };

  useEffect(()=>{

    axios.get('http://localhost:7500/students').then(allstudent => {
      setData(allstudent.data);
    });

  },[])


 
  

  return (
      <>
      <h2>ALL Students</h2>
    <TableContainer component={Paper}>
    <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">grade</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={grade}
          onChange={handleChange}
          autoWidth
          label="grade"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='A'>A</MenuItem>
          <MenuItem value='B'>B</MenuItem>
          <MenuItem value='C'>C</MenuItem>
          <MenuItem value='D'>D</MenuItem>
        </Select>
      </FormControl>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Reginstarion No</TableCell>
            <TableCell align="left">Student Name </TableCell>
            <TableCell align="left">Grade</TableCell>
            <TableCell align="left">Section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.regNo}
              </TableCell>
              <TableCell align="left">{row.studentName}</TableCell>
              <TableCell align="left">{row.grade}</TableCell>
              <TableCell align="left">{row.section}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


export default  Student;