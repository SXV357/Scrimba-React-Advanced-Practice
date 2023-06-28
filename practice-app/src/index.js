import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {LightContext} from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // a value prop always needs to be passed to provider and it represents data that needs to be saved
  // this data will then be made accessible to the consumers just like how state can be passed down as props to components down the rendering tree
    <LightContext.Provider value = {'dark'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LightContext.Provider>
);