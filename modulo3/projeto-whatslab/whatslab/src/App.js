import React from "react";
import CompoApp from "./components/CompoApp";
import styled from 'styled-components';


const EstiloApp = styled.div`
    padding: 20px;
    border: 5px outset gray ;
    height: 90vh;
    width: 310px;
    margin: 1% 0% 0% 40%;
    position: fixed;
`


function App() {
  return (
    <EstiloApp>
    <CompoApp/>
    </EstiloApp>
  );
}

export default App;
