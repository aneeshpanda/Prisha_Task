import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard';
import Leads from './Components/Lead'
import LeadStatus from './Components/LeadStatus'
import Commission from './Components/Commission'
import Nav from './Components/Nav'


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" >
            <Dashboard />
          </Route>
          <Route exact path="/team" >
          </Route>
          <Route exact path="/leads"> <Leads /> </Route>
          <Route exact path="/leadstatus"> <LeadStatus /> </Route>
          <Route exact path="/commission"> <Commission /> </Route>
        </Switch>
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