import React, {Fragment, useState} from 'react';
import './style.css';
import PropControls from './PropControls';
// import { withIncrementer } from './withIncrementer';
import Render from './Render';
import DataFetcher from './DataFetcher';
import Counter from './Counter';
import GrandParent from './Optimization Testing/GrandParent';

function App() {
  // eslint-disable-next-line
  const [counterVal, setCounterVal] = useState(1);
  const [customCount, setCustomCount] = useState(1);

  const manipulateCustomCount = () => {
    setCustomCount(prevCount => prevCount + 5)
  }

  console.log("App was rendered");

  return (
    <Fragment>
      <PropControls width = {200} height = {200} color = "red">
        <input type = "email" className = "sample-input" name = "email" placeholder = "Email Address"/>
      </PropControls>
      <PropControls width = "200" height = "400" color = "yellow">
        <img src = "https://picsum.photos/200" alt = "Random URL"/>
        <figcaption>Random Image</figcaption>
      </PropControls>

      <Counter startingValue = {counterVal}>
        {(count, increase, decrease, powerUp) => (
          <>
            <div>Current Count: {count}</div>
            <button onClick = {increase}>Increment</button>
            <button onClick = {decrease}>Decrement</button>
            <button onClick = {powerUp}>Power Up</button>
          </>
        )}
      </Counter>

      {/* <PropControls width = {200} height = {200} color = "orange">
        <div>Current Count: {current}</div>
        <button onClick = {increment}>Increment</button>
        <button onClick = {decrement}>Decrement</button>
      </PropControls> */}

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

      <DataFetcher url="https://swapi.dev/api/people/1/">
        {(obj) => (
          obj.isLoading && obj.err == null ? <h1>Loading...</h1> : <p>{JSON.stringify(obj.meta)}</p>
        )}
      </DataFetcher>

      <div>Custom Count: {customCount}</div>
      <button onClick = {manipulateCustomCount}>Modify Custom Count</button>

      <GrandParent customCount = {customCount}/>
      <GrandParent customCount = {customCount}/>

    </Fragment>
  );
}

export default App