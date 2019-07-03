import React from 'react';
import "../css/Like.css";


class Like extends React.Component {

  handleLike = event => {
    event.preventDefault()
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
export default Like;