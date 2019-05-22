import React from 'react';
import '../css/App.css'
import Oils from '../containers/Oils';
import OilForm from '../containers/OilForm'
import About from '../components/About'
import NavBar from '../components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <NavBar />
          <br />
          <Route exact path="/" component={Oils} />
          <Route exact path="/about" component={About} />
          <Route exact path="/add" component={OilForm} />

        </div>

      </div>
    </Router>
  )
}


export default App;