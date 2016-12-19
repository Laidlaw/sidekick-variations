import React from 'react';
// import { Card, Icon } from 'semantic-ui-react';
import HeroCard from './HeroCard';

const HeroPath = (props) => {
  const { title, payload } = props;

  return (
    <div>
      <h1>{title} path</h1>
      {
        payload.map((item, index) => (
          <HeroCard key={index} {...item}/>
        ))
      }
    </div>
  );
}

HeroPath.propTypes = {
  title: React.PropTypes.string
}
HeroPath.defaultProps = {
  title: "default title"
}

export default HeroPath;
