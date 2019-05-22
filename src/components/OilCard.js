import React from 'react';

import Card from 'react-bootstrap/Card';

const OilCard = ({ oil }) => (
  //   <div key={oil.id} className="OilCard">
  //     <h4>{oil.name}</h4>
  //     <h5>Uses: {oil.uses}</h5>
  //     <h6>Description: {oil.description}</h6>
  //     <img className="OilImage" src={oil.img_url} alt="" />
  //   </div>
  // )
  // export default OilCard;

  <Card className="OilCard" style={{ width: '13rem', height: '16rem', margin: '10px' }}>
    <Card.Header as="h5">{oil.name}</Card.Header>
    <Card.Body>
      <Card.Text as="h6">-Uses- <br />
        {oil.uses}</Card.Text>
      <Card.Text as="h6">Description: <br />{oil.description}
      </Card.Text>
      <Card.Link className="App-link" href={oil.img_url}>Image</Card.Link>
    </Card.Body>
  </Card>
)
export default OilCard;
