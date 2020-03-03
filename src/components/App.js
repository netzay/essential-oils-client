import React, {Component} from 'react';
import { connect } from 'react-redux'

import '../css/App.css';

import Oils from '../containers/Oils';
import OilForm from '../containers/OilForm';
import Favorites from '../containers/Favorites'

import About from './About';
import NavBar from './NavBar';
import Header from './Header';
import Favorite from './Favorite';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchFavorites } from '../actions/favorites'


class App extends Component {
  componentDidMount = () => {
    this.props.fetchFavorites();
  }

  render() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App-header">
          <br />
          <Header />
          <Route exact path="/oils" component={Oils} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/about" component={About} />
          <Route exact path="/addnew" component={OilForm} />
        </div>
      </div>
    </Router>
  );
}
}
export default connect(null, { fetchFavorites })(App);
