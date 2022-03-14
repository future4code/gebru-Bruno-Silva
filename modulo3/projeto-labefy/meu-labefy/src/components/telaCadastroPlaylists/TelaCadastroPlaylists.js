import React from "react";
import axios from "axios";

const urlPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers: {
      Authorization: "bruno-moura-gebru"
    }
  }

export default class TelaCadastroPlaylists extends React.Component {

    state = {
        inputNamePlaylist: ''
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputNamePlaylist
          }
        axios
        .post(urlPlaylists, body, headers)
        .then(res => {
            alert(`A playlist ${this.state.inputNamePlaylist} foi criada com sucesso!`)
            this.setState({inputNamePlaylist: ''})
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    onPlaylistNameChange = (e) => {
        this.setState({ inputNamePlaylist: e.target.value})
    }

  render() {
    return (
      <div>
        <input placeholder="Nome da Playlist" value={this.state.inputNamePlaylist} onChange={this.onPlaylistNameChange}></input>
        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </div>
    );
  }
}