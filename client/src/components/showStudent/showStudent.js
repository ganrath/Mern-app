import  React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function Student() {
   
  const [data, setData] = useState([]); 

  useEffect(()=>{

    axios.get('http://localhost:7500/students').then(allstudent => {
      setData(allstudent.data);
    });

  },[])
  

  return (
      <>
      <h2>ALL Students</h2>
    <TableContainer component={Paper}>
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
              key={row.name}
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
