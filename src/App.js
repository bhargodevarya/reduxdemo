import React, { Component } from 'react';
import {Provider} from 'react-redux'

import {storeDemo} from './store/ConfigureStore'
import { store } from './reducers/index'
import SearchBar from './components/SearchBar'

class App extends Component {

  render() {
    storeDemo()
    return (
      <Provider store={store}>
      <div>
        <SearchBar/>
      </div>
      </Provider>
    );
  }
}

export default App;
