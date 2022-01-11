/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import  React, { useState} from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Login(){

  let history = useHistory();
   const [data, setData] = useState({
    userName: 'gan',
    password: 'gan'
   })

    const [message, setMessage] =  useState('')

   const  handleChange = (e) => {

    setData({
        ...data,
        [e.target.name]: e.target.value
    })
    
    }
const handleCreate =() => {
  axios.post('http://localhost:7500/login', data ,{
    withCredentials: true }).then((res) =>  {
     if(res.data.message){
      history.push("/student");
     }
});
}


    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <p>{message}</p>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">User Name</InputLabel>
          <Input id="component-simple" value={data.userName}  name='userName' onChange={handleChange} />
        </FormControl>
        <Divider light />
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <Input id="component-simple" value={data.password} name='password' onChange={handleChange} />
        </FormControl>
        <Divider light />
        <Button variant="contained" onClick={handleCreate}>Login</Button>
        </Box>
    )
}