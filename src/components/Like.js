import React from 'react';
import "../css/Like.css";

class Like extends React.Component {

  state = {
    isLiked: 'white'
  }

  handleLike = () => {
    this.setState({
      isLiked: 'blue'
    });
  }

  render() {
    return (
      <span className="like-button">
        <i className="fa fa-heart" onClick={this.handleLike}
          style={{ color: this.state.isLiked }} >
        </i>
      </span>
    )
  }
}
export default Like;