//highest component
import React from 'react';
import { Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'; //removes margins and padding
import './App.css';
import Home from './components';
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"

// default path is localhost:3000
function App() {
  return (
    // empty containers are fragment containers
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contacts" component={Contacts}/>
    </>
  );
}

export default App;
