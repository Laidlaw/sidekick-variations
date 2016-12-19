import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Step } from 'semantic-ui-react';
import HeroPath from './HeroPath';
import Questions from './Questions';

class HeroPaths extends Component {


  render() {
    const { paths } = this.props;
    console.log(paths);
    return (
      <div>
        <Step.Group>{
          paths.map((path, index) => (
           <Questions
             key={path.title + index}
             {...path}
           />
          ))
        }</Step.Group>

      <Card.Group>{
        paths.map((path, index) => (
         <HeroPath
           key={path.title + index}
           {...path}
         />
        ))
      }</Card.Group>
    </div>
    );
  }
};

const mapStatetoProps = ({ paths }) => ({ paths })

export default connect(mapStatetoProps)(HeroPaths);
