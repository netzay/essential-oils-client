import React from 'react';
import '../css/App.css';

import Oils from '../containers/Oils';
import OilForm from '../containers/OilForm';

import About from './About';
import NavBar from './NavBar';
import Header from './Header';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App-header">
          <br />
          <Header />
          <Route exact path="/oils" component={Oils} />
          <Route exact path="/about" component={About} />
          <Route exact path="/addnew" component={OilForm} />
        </div>
      </div>
    </Router>
  )
}
export default App;