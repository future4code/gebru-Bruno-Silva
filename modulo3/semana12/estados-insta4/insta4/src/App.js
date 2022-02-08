import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const AdicionarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'roberto',
        fotoUsuario: 'https://picsum.photos/51/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'bruna',
        fotoUsuario: 'https://picsum.photos/52/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    valorInputUser: "",
    valorInputFoto: "",
    valorInputPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUser,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };

    const novosPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novosPosts });
    this.setState({     valorInputUser: "", valorInputFoto: "", valorInputPost: "" });
  };

  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };

  render() {
    
    const listaDeComponentes = this.state.posts.map((post) => {
      return (
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      )
    });

    return (
      <div>
      <AdicionarContainer>
      <input 
        value={this.state.valorInputUser}
        onChange={this.onChangeInputUser}
        placeholder={"Seu Usuário"}
      />
      <input 
        value={this.state.valorInputFoto}
        onChange={this.onChangeInputFoto}
        placeholder={"Link Foto de perfil"}
      />
      <input 
        value={this.state.valorInputPost}
        onChange={this.onChangeInputPost}
        placeholder={"Link do Post"}
      />
  
      <button onClick={this.adicionaPost}>Postar</button>
      </AdicionarContainer>

      <MainContainer>
        <div>{listaDeComponentes}</div>
      </MainContainer>
      </div>
    );
  }
}

export default App;
