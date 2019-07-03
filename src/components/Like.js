import React from 'react';
import "../css/Like.css";
import { connect } from 'react-redux';
import { addFavorite } from '../actions/oils'


class Like extends React.Component {

  handleLike = event => {
    event.preventDefault()
    this.props.addFavorite(this.props.oil.id)
    console.log("like")
  }

  render() {
    return (
      <span className="like-button">
        <i className="fa fa-heart" onClick={this.handleLike} />

      </span>
    )
  }
}
export default connect(null, {
  addFavorite
})(Like);