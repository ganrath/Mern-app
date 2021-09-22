
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import useStyles from './styles.js';
import Student from './components/showStudent/showStudent.js'
import CreateStudent from './components/createStudent/createStudent.js'
function App() {

  const classes = useStyles();

  return (

    <div className="App">
     <Container maxWidth='lg'>
       <AppBar className={classes.appBar} position='static' color='inherit'>
         <Typography className={classes.heading} variant='h2' align='center'>Students Create & show</Typography>
         </AppBar>
         <Grow in>
           <Container>
             <Grid container justify='spae-between' alignItems='strect'>
              <Grid item xs={12} sm={7}>
              <AppBar className={classes.appBar} position='static' color='inherit'>
              <Student/>
              </AppBar>
              </Grid>

              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position='static' color='inherit'>
                 <CreateStudent/>
                 </AppBar>
             </Grid>
             </Grid>
           </Container>
         </Grow>
       </Container>   
       </div>
  );
}

export default App;
