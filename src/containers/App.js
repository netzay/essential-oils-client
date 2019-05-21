import React, { Component } from 'react';
import './App.css'
import Oils from './Oils';


class App extends Component {

  render() {
    console.log(this.state)
    return (
      <div className="App">
        App Container
        <Oils />
      </div>
    )
  }
}

export default App;