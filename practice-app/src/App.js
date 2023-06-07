import React, {Fragment} from 'react';
import './style.css';
import PropControls from './PropControls';
import { withIncrementer } from './withIncrementer';

function App({current, increment, decrement}) {
  return (
    <Fragment>
      <PropControls width = {200} height = {200} color = "red">
        <input type = "email" className = "sample-input" name = "email" placeholder = "Email Address"/>
      </PropControls>
      <PropControls width = "200" height = "400" color = "yellow">
        <img src = "https://picsum.photos/200" alt = "Random URL"/>
        <figcaption>Random Image</figcaption>
      </PropControls>
      <PropControls width = {200} height = {200} color = "orange">
        <div>Current Count: {current}</div>
        <button onClick = {increment}>Increment</button>
        <button onClick = {decrement}>Decrement</button>
      </PropControls>
    </Fragment>
  );
}

export default withIncrementer(App)