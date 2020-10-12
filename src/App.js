import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import ReedCare from './components/pages/ReedCare';
import About from './components/pages/About';
import Navbar from './components/navbar/Navbar.js'

import './App.css';

function App() {
  return (
    <Router>

      <Navbar/>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/order' exact component={Order}/>
        <Route path='/about' exact component={About}/>
        <Route path='/reedcare' exact component={ReedCare}/>
      </Switch>

    </Router>
  );
}

export default App;
