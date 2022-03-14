import React from "react";
import TelaCadastroPlaylists from "./components/telaCadastroPlaylists/TelaCadastroPlaylists";
import ListaPlaylists from "./components/listaPlaylists/ListaPlaylists";
import DetalhePlaylist from "./components/detalhePlaylist/DetalhePlaylist";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: roboto;
    font-size: 25px;
    text-align: center;
    button {
    background-color: #0c2450;
    color: white;
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    :hover {
    background-color: #8db5aa;
  }
    :active {
      background-color: #d25a1d;
    }
  }
  input {
    border-radius: 10px;
    padding: 10px;
  }
  }
`;

const EstiloApp = styled.div ` 
  display: grid;
  justify-content: space-evenly;
  background-image: url('https://wallpaperaccess.com/full/3440921.jpg');
  background-repeat: repeat;
  background-size: 1800px;
  height: 100vh;
`
const EstiloButtonsApp = styled.div `
  justify-items: space-between;
  padding-top: 50px;
`

export default class App extends React.Component {

  state = {
    renderedScreen: 'telaCadastroPlay',
    playlistId: ''
  }
  
  chooseScreen = () => {
    switch (this.state.renderedScreen) {
      case 'telaCadastroPlay':
        return <TelaCadastroPlaylists />
      case 'listaPlay':
        return <ListaPlaylists goToTelaDetalhePlaylist={this.goToTelaDetalhePlaylist} />
      case 'telaDetalhePlay':
        return <DetalhePlaylist playlistId={this.state.playlistId} />
      default:
        return <h3>Página não encontrada!</h3>
    }
  }

  goToTelaCadastroPlaylist = () => {
    this.setState({ renderedScreen: 'telaCadastroPlay' })
  }

  goToListaPlaylists = () => {
    this.setState({ renderedScreen: 'listaPlay' })
  }

  goToTelaDetalhePlaylist = (playlistId) => {
    this.setState({ renderedScreen: 'telaDetalhePlay',  playlistId: playlistId })
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <EstiloApp>
        <EstiloButtonsApp>
        <button onClick={this.goToTelaCadastroPlaylist}>Cadastrar Playlists</button>
        <button onClick={this.goToListaPlaylists}>Lista de Playlists</button>
        </EstiloButtonsApp>
        {this.chooseScreen()}
        </EstiloApp>
      </div>
    );
  }
}
