import React, { Component } from 'react';

import HeroCard from './HeroCard';


class HeroPath extends Component {

  renderNestedCards(props) {
    return this.props.cards
      .filter(card => card.shape === "nested")
      .map((card) => this.nestedCards(card));
  }

  nestedCards(card)  {
    // var nested = props.cards.filter(card => card.shape === "nested");
      // console.log(nested);
    return (
        <HeroCard
          key={card.title}
          title={card.title}
          type={card.type}
          shapes={card.shape}
          contentItems={card.content}
        />
    )
  }

  render(props) {
    const containRenderNestedCards = this.renderNestedCards();
   return (
     <div>
      <div className="panel-heading">
        {this.props.title}
       </div>
       {containRenderNestedCards}
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
