import React, {Fragment} from 'react';
import './style.css';
import PropControls from './PropControls';
import { withIncrementer } from './withIncrementer';
import Render from './Render';

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

      <Render renderProps = {(string, convert) => {
        // a function is passed down as props to a child component and the child determines what is rendered.
        let reversed = "";
        for (let i = string.length - 1; i >= 0; i--){
          reversed += string[i];
        }
        return (
          <>
            <h1>{`Original String: ${convert ? string.toUpperCase() : string.toLowerCase()}`}</h1>
            <h1>{`Reversed String: ${convert ? reversed.toUpperCase() : reversed.toLowerCase()}`}</h1>
          </>
        )
      }}/>


    </Fragment>
  );
}

export default withIncrementer(App)