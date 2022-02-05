import React from "react";
import CompoApp from "./components/CompoApp";
import styled from 'styled-components';


const EstiloApp = styled.div`
    padding: 20px;
    border: 5px outset blue ;
    position: absolute;
    height: 90vh;
    margin: 1% 50% 0% 40%;
`


function App() {
  return (
    <EstiloApp>
    <CompoApp/>
    </EstiloApp>
  );
}

export default App;
