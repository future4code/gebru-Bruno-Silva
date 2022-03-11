import React from "react";
import axios from "axios";

const urlPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers: {
      Authorization: "bruno-moura-gebru"
    }
  }

export default class ListaPlaylists extends React.Component {

  state = {
    playlists: []
  }

  componentDidMount(){
    this.getAllPlaylists()
}

  getAllPlaylists = () => {
    axios
    .get(urlPlaylists, headers)
    .then(res => {
      this.setState({playlists: res.data.result.list})
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  deletePlaylist = (playlistId) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, headers)
    .then(res => {
        alert('Playlist deletada com sucesso!')
        this.getAllPlaylists()
    })
    .catch(err => {
      console.log(err.response)
    })
  }


  render() {

    const playlistsComponents = this.state.playlists.map((playlist) => {
      return <li key={playlist.id}> <button onClick={this.props.goToTelaDetalhePlaylist}>+</button> {playlist.name} <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar Playlist</button> </li>
  });

    return (
      <div>
        {playlistsComponents}
      </div>
    );
  }
}