import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post2
          nomeUsuario={'roberto'}
          fotoUsuario={'https://picsum.photos/51/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post3
          nomeUsuario={'bruna'}
          fotoUsuario={'https://picsum.photos/52/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>
    );
  }
}

export default App;
