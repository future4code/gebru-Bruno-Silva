import React from "react";
import axios from "axios";
import styled from 'styled-components';

const EstiloInput = styled.div `
  display: grid;
  align-items: center;
  text-align: center;
  padding: 10px;
`
const EstiloPage = styled.div `
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px;
`

const headers = {
  headers: {
    Authorization: "bruno-moura-gebru"
  }
}

export default class DetalhePlaylist extends React.Component {

  state = {
    tracks: [],
    inputNameMusic: '',
    inputNameArtist: '',
    inputLinkMusic: ''
  }

  componentDidMount(){
    this.getPlaylistTracks()
  }

  getPlaylistTracks = (playlistId) => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, headers)
    .then(res => {
      this.setState({tracks: res.data.result.tracks})
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  removeTrackFromPlaylist = (trackId) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`, headers)
    .then(res => {
        alert('Música deletada com sucesso!')
        this.getPlaylistTracks()
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  addTrackToPlaylist = (playlistId) => {
    const body = {
        name: this.state.inputNameMusic,
        artist: this.state.inputNameArtist,
        url: this.state.inputLinkMusic
      }
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, body, headers)
    .then(res => {
        alert(`A música ${this.state.inputNameMusic} foi adicionada com sucesso!`)
        this.setState({inputNameMusic: ''})
        this.setState({inputNameArtist: ''})
        this.setState({inputLinkMusic: ''})
        this.getPlaylistTracks()
    })
    .catch(err => {
        alert(err.response.data.message)
    })
  }

  onMusicNameChange = (e) => {
      this.setState({ inputNameMusic: e.target.value })
  }

  onArtistNameChange = (e) => {
    this.setState({ inputNameArtist: e.target.value })
  }

  onLinkMusicChange = (e) => {
  this.setState({ inputLinkMusic: e.target.value })
  }

  render() {
    
    const tracksComponents = this.state.tracks.map((track) => {
      return <li key={track.id}> <audio src={track.url} controls /> {track.name} - {track.artist} <button onClick={() => this.removeTrackFromPlaylist(track.id)}>Deletar Música</button> </li>
  });

    return (
      <div>
        <EstiloInput>
        <input placeholder="Nome da Música" value={this.state.inputNameMusic} onChange={this.onMusicNameChange} />
        <input placeholder="Nome do Artista/Banda" value={this.state.inputNameArtist} onChange={this.onArtistNameChange} />
        <input placeholder="Link da Música" value={this.state.inputLinkMusic} onChange={this.onLinkMusicChange} />
        </EstiloInput>
        <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
        <EstiloPage>
        {tracksComponents}
        </EstiloPage>
      </div>
    );
  }
}