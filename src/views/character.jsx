import React from 'react';

export const Character = (props) => {
  return (
    <div className="character">
      <div>Name: {props.name}</div>
      <div>Health: {props.health}</div>
    </div>
  );
};
