import React from 'react';

const HeroCard = (props) => (
  <div>
    <h3>{props.title}</h3>
      <ul>{
        props.content.map((blah, index) => (
        <li key={index}>{blah.step}</li>
      ))}
    </ul>
  </div>
);

export default HeroCard;
