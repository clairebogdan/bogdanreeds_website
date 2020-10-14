import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import ReedCare from './components/pages/ReedCare';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import FAQ from './components/pages/FAQ';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js'

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
        <Route path='/gallery' exact component={Gallery}/>
        <Route path='/FAQ' exact component={FAQ}/>
      </Switch>

      <Footer/>

    </Router>
  );
}

export default App;
