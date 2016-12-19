import React from 'react';
// import { Card, Icon } from 'semantic-ui-react';
import HeroCard from './HeroCard';

const Questions = (props) => {
  const { payload } = props;

      return (
        <div>
        {payload.filter(item => item.type === "probing-questions")
      .map((item, index) => (
        <HeroCard key={index} {...item}/>
      ))}</div>
    );

}

export default Questions;
