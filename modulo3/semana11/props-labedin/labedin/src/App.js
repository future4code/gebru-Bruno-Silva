import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  box-sizing: border-box;
`
const EstiloApp = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const EstiloContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
`
const EstiloH2 = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <EstiloApp className="App">
      <GlobalStyle/>
      <EstiloContainer className="page-section-container">
        <EstiloH2>Dados pessoais</EstiloH2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/89053281?v=4" 
          nome="Bruno Moura da Silva" 
          descricao="Oi, eu sou o Bruno, tenho 26 anos e sou estudante de desenvolvimento web na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </EstiloContainer>

      <EstiloContainer className="page-section-container">
        <CardPequeno 
          imagem="https://img.icons8.com/external-bearicons-glyph-bearicons/34/000000/external-Email-essential-collection-bearicons-glyph-bearicons.png/"
          nome="Email:"
          descricao=" obrunomoura@yahoo.com.br"
        />
        <CardPequeno 
          imagem="https://img.icons8.com/ios-filled/34/000000/order-delivered.png"
          nome="Endereço:"
          descricao=" Rua Gustavo de Souza, São Paulo - SP"
        />

      </EstiloContainer>

      <EstiloContainer className="page-section-container">
        <EstiloH2>Experiências profissionais</EstiloH2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQHqxUv6k_MSBQ/company-logo_200_200/0/1625154474925?e=1651104000&v=beta&t=RqZSuew405dI9u36sQeY-zwyFdQjuAIJDvzQA8-g9FQ" 
          nome="Evolua Educação" 
          descricao="Produtor de cursos." 
        />
        
      </EstiloContainer>

      <EstiloContainer className="page-section-container">
        <EstiloH2>Minhas redes sociais</EstiloH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </EstiloContainer>
    </EstiloApp>
  );
}

export default App;
