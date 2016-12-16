import React from 'react';
import HeroPath from './HeroPath';


const Sidekick = (props) => {

  const heroPaths = paths.map((path) => {
    return (
      <HeroPath
        key={path.id}
        title={path.title}
        cards={path.payload}
      />
    )
  })

    return (
      <div>
        { heroPaths }
      </div>
    );
}

export default Sidekick;
