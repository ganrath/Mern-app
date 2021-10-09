import  React from 'react';
import LoginForm from './modules/login/index.js';
import StudentModule from './components/student.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {


  return (
    <Router>
   <Switch>
          <Route path="/" exact component={LoginForm}/>

          <Route path="/login"  component={LoginForm}/>
   
          <Route path="/student"  component={StudentModule}/>
  
     
        </Switch>
       </Router>
  );
}

export default App;
