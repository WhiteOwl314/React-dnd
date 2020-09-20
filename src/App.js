import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from "./Item";
import Target from "./Target";

function App() {

  const state = {
    items: [
      {id: 1, name: 'Item 1' },
      {id: 2, name: 'Item 2' },
      {id: 3, name: 'Item 3' },
      {id: 4, name: 'Item 4' },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-intro">
        <div className="app-container">
          <div className="item-container">
            {
              state.items.map((item,index) => (
                  <Item key={item.id} item={item}/>
              ))
            }
          </div>
          <Target/>
        </div>
      </div>
    </div>
  );
}

export default App;
