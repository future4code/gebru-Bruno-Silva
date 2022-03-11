import React from "react";
import axios from "axios";
import TelaCadastroPlaylists from "./components/telaCadastroPlaylists/TelaCadastroPlaylists";
import TelaCadastroMusicas from "./components/telaCadastroMusicas/TelaCadastroMusicas";
import ListaPlaylists from "./components/listaPlaylists/ListaPlaylists";
import DetalhePlaylist from "./components/detalhePlaylist/DetalhePlaylist";



export default class App extends React.Component {

  state = {
    renderedScreen: 'telaCadastroPlay'
  }

  chooseScreen = () => {
    switch (this.state.renderedScreen) {
      case 'telaCadastroPlay':
        return <TelaCadastroPlaylists />
      case 'listaPlay':
        return <ListaPlaylists goToTelaDetalhePlaylist={this.goToTelaDetalhePlaylist} />
      case 'telaCadastroMus':
        return <TelaCadastroMusicas />
      case 'telaDetalhePlay':
        return <DetalhePlaylist />
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

  goToTelaCadastroMusicas = () => {
    this.setState({ renderedScreen: 'telaCadastroMus'})
  }

  goToTelaDetalhePlaylist = () => {
    this.setState({ renderedScreen: 'telaDetalhePlay'})
  }

  render() {
    return (
      <div>
        <button onClick={this.goToTelaCadastroPlaylist}>Cadastrar Playlists</button>
        <button onClick={this.goToListaPlaylists}>Lista de Playlists</button>
        <button onClick={this.goToTelaCadastroMusicas}>Cadastrar Músicas</button>
        {this.chooseScreen()}
      </div>
    );
  }
}
