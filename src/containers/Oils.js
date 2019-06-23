import React, { Component } from 'react';
import '../css/Oils.css';

import { connect } from 'react-redux';
import { getOils } from '../actions/oils';
import Oil from '../components/Oil'

class Oils extends Component {
  componentDidMount() {
    this.props.getOils()
  }

  render() {
    return (
      <div className="OilsContainer">
        <h1>Essential Oils</h1>
        {this.props.oils.map(oil => <Oil key={oil.id} oil={oil} handleDelete={this.props.handleDelete} />
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    oils: state.oils,
  })
}

export default connect(mapStateToProps, { getOils })(Oils);