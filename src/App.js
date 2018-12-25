import React, { Component } from 'react';

import {storeDemo} from './store/ConfigureStore'

class App extends Component {

  render() {
    storeDemo()
    return (
      <div>
        plain redux demo
      </div>
    );
  }
}

export default App;
