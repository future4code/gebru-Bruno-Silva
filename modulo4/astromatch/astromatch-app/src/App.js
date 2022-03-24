import React, {useState, useEffect} from 'react';
import Home from "./components/Home";
import Matches from "./components/Matches";
import axios from "axios";
import styled from 'styled-components';

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
      {chooseScreen()}
      <button onClick={clear}>Limpar</button>
    </div>
  );
}

export default App;
