import React from 'react';

export const Character = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Health: {props.health}</h1>
    </div>
  );
};
