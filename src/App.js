//highest component
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; //removes margins and padding
import './App.css';
import Home from './components';

function App() {
  return (
    // empty containers are fragment containers
    <>
      <CssBaseline />
      <Home />
    </>
  );
}

export default App;
