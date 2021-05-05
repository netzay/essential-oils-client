import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOilFormData } from '../actions/oilForm'
import { createOil } from '../actions/oils'

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
    const { name, uses, description, img_url } = this.props.oilFormData;
    return (
      <div id="OilForm" className="OilForm">
        Add New:
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="uses">Uses:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="uses"
              value={uses}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={description}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image Url:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>
          <button type="submit">Add Oil</button>
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