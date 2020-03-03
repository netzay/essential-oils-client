import React from 'react';
import Like from './Like';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { deleteOil } from '../actions/oils'


const Favorite = props => {
  console.log(props)
    
    return (
      <div>
        <Card className="OilCard" style={{ width: '13rem', height: '18rem', margin: '10px' }}>
      <Card.Body>
          <Card.Title>
            <input onClick={() => prop.delete(props.oil.id)}
            id="check" type="checkbox" className="fa fa-star" defaultChecked="true" ></input>
            <br/>
            {props.oil.name}
          </Card.Title>
          <br/>
          <Card.Subtitle style={{ height: '4rem', overflowY: 'auto' }}>{props.oil.description}</Card.Subtitle>
          <br/>
          <Card.Link target="_blank" style={{ color: '#8b0000' }} href={props.oil.uses}>Uses</Card.Link>
          <br/>
        </Card.Body>

        </Card >
      </div >
    );
  }

export default Favorite;