// Third-party imports
import React from 'react';
import ReactDOM from 'react-dom';

// Local imports
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { StoreContext, store } from './utilities';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
  // react callback initializing store after render
  () => store.init(),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
