import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { deleteOil } from '../actions/oils'
import { addFavorite } from '../actions/favorites'


class Oil extends React.Component {
  handleLike = event => {
    event.preventDefault()
    this.props.addFavorite(this.props.oil.id)
    console.log("like")
  }
  handleDelete = event => {
    event.preventDefault()
    this.props.deleteOil(this.props.oil.id)
  }

  render() {
    return (
      <div>
        <Card className="OilCard" style={{ width: '13rem', height: '18rem', margin: '10px' }}>
          <Card.Header as="h5">{this.props.oil.name}</Card.Header>
          <Card.Body>
            <Card.Text as="h6">Uses: <br />
              {this.props.oil.uses}</Card.Text>
            <Card.Text as="h6">Description: <br />{this.props.oil.description}
            </Card.Text>
            <Card.Link className="App-link" href={this.props.oil.img_url}>Image</Card.Link>
            <br />
            <button onClick={this.handleDelete}>Delete</button>
            {/* <i className="fa fa-heart" onClick={this.handleLike} /> */}
          </Card.Body>
        </Card >
      </div >
    );
  }
}
export default connect(null, {
  deleteOil, addFavorite
})(Oil);