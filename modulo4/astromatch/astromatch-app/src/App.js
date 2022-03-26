import React, {useState, useEffect} from 'react';
import Home from "./components/Home";
import Matches from "./components/Matches";
import axios from "axios";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: roboto;
    font-size: 25px;
    color: white;
  }
  img {
    border-radius: 50px;
    width: 500px;
    height: 550px;
  }
  p {
    padding: 5px;
  }
  
`;

const EstiloApp = styled.div `
  padding: 20px;
  background-color: rgb(169,3,41);
  height: 100vh;
`
const EstiloButtonApp = styled.div `
  position: fixed;
  padding: 10px;
  bottom: 5px;
  right: 5px;
` 

const App = () => {

  const headers = {'Content-Type': 'application/json'};

  const [ renderedScreen, setRenderedScreen ] = useState('telaInicial')

  const chooseScreen = () => {
    switch (renderedScreen) {
      case 'telaInicial':
        return <Home goToTelaMatches={goToTelaMatches} />
      case 'telaMatches':
        return <Matches goToTelaInicial={goToTelaInicial} />
      default:
        return <h3>Página não encontrada!</h3>
    }
  }

  const goToTelaInicial = () => {
    setRenderedScreen('telaInicial')
  }

  const goToTelaMatches = () => {
    setRenderedScreen('telaMatches')
  }


  const clear = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-gebru/clear`, headers)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
};

  return (
    <div>
      <GlobalStyle />
      <EstiloApp>
      {chooseScreen()}
      <EstiloButtonApp>
      <Button onClick={clear} variant="contained" color="warning" >Limpar</Button>
      </EstiloButtonApp>
      </EstiloApp>
    </div>
  );
}

export default App;
