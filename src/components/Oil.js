import React from 'react';
// import Like from './Like';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { deleteOil } from '../actions/oils';



class Oil extends React.Component {
  handleDelete = event => {
    event.preventDefault()
    this.props.deleteOil(this.props.oil.id)
  }


  render() {
    return (
      <div>
        <Card className="OilCard" style={{ width: '13rem', height: '23rem', margin: '10px' }} >
          <Card.Header as="h5">{this.props.oil.name.toUpperCase()}</Card.Header>
          <Card.Body>
            <Card.Text as="h6">Uses: <br />
              {this.props.oil.uses}</Card.Text>
            <Card.Text as="h6">Description: <br />{this.props.oil.description}
            </Card.Text>
            <Card.Link className="App-link" href={this.props.oil.img_url}>Image</Card.Link>
            <br />
            <button onClick={this.handleDelete}>Delete</button><br />
            {/* <Like /> */}
          </Card.Body>
        </Card >
      </div >
    );
  }
}
export default connect(null, { deleteOil })(Oil);
