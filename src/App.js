import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Leads from './Leads/index'
import Input from './input'
import Nav from './nav'


function App() {
  return (
   
    <div>
      <Router>
    
     
    <div>
      <Nav />
      <Switch>
      <Route exact path="/dashboard" >
            /
        </Route>
        <Route exact path="/team" >
        team
        </Route>
        <Route exact path="/projects" >
        projects
        </Route>
        <Route exact path="/leads"> <Leads /> </Route> 
      </Switch>
    </div>
  {/* </div> */}
</Router>

    </div>
    
  );
}
// export const  Home  = () => {
//   return <h2>Home</h2>;
//   }
  
//   function About() {
//   return <h2>About</h2>;
//   }
  
//   function Users() {
//   return <h2>Users</h2>;
//   }


  
export default App