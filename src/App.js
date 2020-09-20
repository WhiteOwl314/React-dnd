import React from 'react';
import Knight from "./Knight";
import Square from "./Square";
import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }
    html{
        padding: 10px;
    }
`;

function App() {

  return (
      <>
          <GlobalStyles/>
          <Square black>
              <Knight/>
          </Square>
      </>
  );
}

export default App;
