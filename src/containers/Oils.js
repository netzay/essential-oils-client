import React, { Component } from 'react';
import { connect } from 'react-redux';
import OilCard from '../components/OilCard';
// import OilForm from './OilForm';
import { getOils } from '../actions/oils'

import '../css/Oils.css';

//no state but class is used for lifecycle method of componentdidmount
class Oils extends Component {

  componentDidMount() {
    this.props.getOils();
  }
  render() {
    return (
      <div className="OilsContainer">
        <h1>Oils</h1>
        {this.props.oils.map(oil => <OilCard key={oil.id} oil={oil} />)}
        {/* <OilForm /> */}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    oils: state.oils
  })
}
export default connect(mapStateToProps, { getOils })(Oils);