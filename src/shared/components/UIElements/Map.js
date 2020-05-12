import React from 'react';
import './Map.css';

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <h1>
        Cordinates: <span className="text-tomato">{props.coordinates.lat}</span>
        , <span className="text-green">{props.coordinates.lng}</span>
      </h1>
    </div>
  );
};

export default Map;
