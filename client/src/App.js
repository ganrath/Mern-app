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
          <Route path="/">
            <LoginForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/student">
            <StudentModule />
          </Route>
     
        </Switch>
       </Router>
  );
}

export default App;
