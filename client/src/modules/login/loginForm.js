import  React, { useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import useStyles from '../../styles.js';
import Login from './login';
import Registration from './registration'


export default function LoginForm() {

    const classes = useStyles();
    return(
        <>
<div className="App">
<Container maxWidth='lg'>
  <AppBar className={classes.appBar} position='static' color='inherit'>
    <Typography className={classes.heading} variant='h2' align='center'>Welocme to IQVIA</Typography>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify='spae-between' alignItems='strect'>
         <Grid item xs={12} sm={7}>
         <AppBar className={classes.appBar} position='static' color='inherit'>
        <h1>Login</h1>
          <Login/>
         </AppBar>
         </Grid>

         <Grid item xs={12} sm={4}>
         <AppBar className={classes.appBar} position='static' color='inherit'>
         <h1>Registreation </h1>
         <Registration/>
            </AppBar>
        </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>   
  </div>
        </>
    )



}