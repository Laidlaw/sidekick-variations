import React, { Component } from 'react';
import {
    Header,
} from "semantic-ui-react";

import Sidekick from './Sidekick';
// import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Header inverted as="h1">Sidekick</Header>
        </div>
        <Sidekick />
      </div>
    );
  }
}

export default App;
