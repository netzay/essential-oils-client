import React, { Component } from 'react';
import './App.css'
import Oils from './Oils'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      oils: []
    }
  }
  //asynchronous calls to not stop app from running
  componentDidMount() {
    fetch(`${API_URL}/oils`)
      .then(response => response.json())
      .then(oils => this.setState({ oils }))
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        App Container
        <Oils oils={this.state.oils} />
      </div>
    )
  }
}

export default App;