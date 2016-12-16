import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import HeroCardContent from './HeroCardContent';

const HeroCard = (props) => {
  // const CardExampleGroupProps = () => (
  //   <Card.Group items={props.contentItems} />
  // )

  const heroItems = props.contentItems.map((item) => {
    return (
      <HeroCardContent
        key={item.step}
        item={item.step}
      />
    )
  })

  // const nested = props.shapes.map((shape) => {
  //   if (shape.attribute === "nested") {
  //     return (
  //       <div key="{index}" className="tile is-parent">
  //         <div className="tile is-child">
  //           <h2>{shape.attribute}</h2>
  //         </div>
  //       </div>
  //     )
  //   } else {
  //     return "nope!"
  //   }
  //
  // })

  return (
    <Card>
      <Card.Content header={props.title} />
      <Card.Content description={heroItems} />
      <Card.Content extra>
        <Icon name='user' />
        4 Friends
      </Card.Content>
    </Card>

  );
}

HeroCard.propTypes = {
  title: React.PropTypes.string
}
HeroCard.defaultProps = {
  title: "default title"
}

export default HeroCard;
