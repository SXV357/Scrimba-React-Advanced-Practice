import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewContext from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const {Provider} = NewContext;

root.render(
  // a value prop always needs to be passed to provider and it represents data that needs to be saved
  // this data will then be made accessible to the consumers just like how state can be passed down as props to components down the rendering tree
  <React.StrictMode>
    <Provider value = {true}>
      <App />
    </Provider>
  </React.StrictMode>
);