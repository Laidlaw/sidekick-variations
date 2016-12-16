import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import HeroCard from './HeroCard';


class HeroPath extends Component {
  constructor(props) {
    super();
    this.state = {
      cards: props.cards
    };
  }

  renderStateCards(rank) {
    return this.state.cards
      .filter(card => card.priority === rank)
      .map((card) => this.nestedCards(card));
  }
  // use sort here in the future

  nestedCards(card)  {
    // var nested = props.cards.filter(card => card.shape === "nested");
      // console.log(nested);
    return (
        <HeroCard
          key={card.title}
          {...card}
        />
    )
  }

  render() {
    const { title } = this.props;
    console.log(this.props)
   return (
     <div>
      <div>
        {title}
       </div>
       <Card.Group>
          {this.renderStateCards(1)}
          {this.renderStateCards(2)}
       </Card.Group>
     </div>
   );
  }
};



// const HeroPath = (props) => {
//   var nested = props.cards.filter(card => card.shape === "nested");
//   console.log(nested);
//
//   const nestedCards = nested.map((card) => {
//     return (
//         <HeroCard
//           key={card.title}
//           title={card.title}
//           type={card.type}
//           shapes={card.shape}
//           contentItems={card.content}
//         />
//     )
//   })
//
//   const primaryCards = props.cards.filter(card => card.shape !== "nested").map((card) => {
//     return (
//       <HeroCard
//         key={card.title}
//         title={card.title}
//         type={card.type}
//         shapes={card.shape}
//         contentItems={card.content}
//       />
//     )
//   })
//
//   return (
//     <div className="panel">
//       <div className="panel-heading">
//         {props.title}
//       </div>
//       <div className="tile is-ancestor">
//         <div className="tile is-vertical">
//           <div className="tile notification is-danger">
//             { nestedCards }
//           </div>
//         </div>
//         <div className="tile is-parent">
//           { primaryCards }
//         </div>
//       </div>
//     </div>
//   );
// }

export default HeroPath;
