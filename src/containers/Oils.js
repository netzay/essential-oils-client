import React from 'react';
import './Oils.css';

const Oils = (props) =>
  <div className="OilsContainer">
    <h1>Oils</h1>
    {props.oils.map(oil =>
      <div key={oil.id} className="OilCard">
        <h3>Name: {oil.name}</h3>
        <h5>Uses: {oil.uses}</h5>
        <p>Description: {oil.description}</p>
        <img className="OilImage" src={oil.img_url} alt={oil.name} />
      </div>
    )}
  </div>;

export default Oils;