import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOilFormData } from '../actions/oilForm'
import { createOil } from '../actions/oils';
import '../css/Oils.css';


class OilForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentOilFormData = Object.assign({}, this.props.oilFormData, {
      [name]: value
    })
    this.props.updateOilFormData(currentOilFormData)
  }
  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createOil(this.props.oilFormData)
  }
  render() {
    const { name, uses, notes} = this.props.oilFormData;
    return (
      <div className="OilForm">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
              pattern="[a-zA-Z]"
              required
            />
          </div>
          <div>
            <label htmlFor="uses">Uses:  </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="uses"
              value={uses}
              pattern="[a-zA-Z]"
              required

            />
          </div>
          <div>
            <label htmlFor="notes">Notes: </label>
            <input
              type="text" 
              onChange={this.handleOnChange}
              name="notes"
              value={notes}
              pattern="[a-zA-Z]"
              required
            />
          </div>
          <button className="Button" type="submit">Add New</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    oilFormData: state.oilFormData

  }
}
export default connect(mapStateToProps, {
  updateOilFormData,
  createOil
})(OilForm);