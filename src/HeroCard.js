import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import HeroCardContent from './HeroCardContent';

const HeroCard = (props) => {
  const { priority, title, content } = props;
  // const CardExampleGroupProps = () => (
  //   <Card.Group items={props.contentItems} />
  // )

  const heroItems = content.map((item) => {
    return (
      <HeroCardContent
        key={item.step}
        item={item.step}
      />
    )
  })

  return (
    <Card fluid>
      <Card.Content header={title} />
      <Card.Content description={heroItems} />
      <Card.Content extra>
        <Icon name='user' />
        {priority} Friends
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
