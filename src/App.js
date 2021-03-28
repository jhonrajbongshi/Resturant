import React from 'react';
import './App.css';
import Header from './Header/header'
import Home from './Home/home'
import Sidebar from './Sidebar/sidebar'
import Box from '@material-ui/core/Box';
const App = () => {
  return (
  <div className="App">

  <Header />
  <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" p={1} m={1} >
        <Box  width="25%" p={1} >
        <Sidebar/>
        </Box>
        <Box  width="75%" p={1} >
        <Home />
        </Box>
      </Box>
    </div>
  

  </div>
  );
};

export default App;