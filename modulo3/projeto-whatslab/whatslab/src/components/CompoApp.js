import React from 'react';
import styled from 'styled-components';

const EstilosContainer = styled.div`
    display: flex;
    position: fixed;
`
const EstiloMensagens = styled.div `
    height: 87vh;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 10px;
`
const InputMensagem = styled.div`
    
`
const InputNome = styled.div`
    width: 80px;
`

class CompoApp extends React.Component {
    state = {
        mensagens: [
            {
                nome: "",
                mensagem: ""
            }
        ],

        valorInputNome: "",
        valorInputMensagem: ""
    };

    adicionaMensagem = () => {
        const novaMensagem = {
            nome:`${this.state.valorInputNome}:`,
            mensagem: this.state.valorInputMensagem
        };
        const novaMensagens = [...this.state.mensagens, novaMensagem];
        this.setState({mensagens: novaMensagens});
        this.setState({valorInputNome: "", valorInputMensagem: ""}); 
    };

    onChangeInputNome = (event) => {
        this.setState({valorInputNome: event.target.value});
    };

    onChangeInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value});
    };

    render() {

        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return (
                <p>
                    <b>{mensagem.nome}</b> {mensagem.mensagem}
                </p>
            );
        });

  
      return (
        <div>
            <EstiloMensagens>{listaDeMensagens}</EstiloMensagens>
            <EstilosContainer>
            <InputNome>
            <input 
                value={this.state.valorInputNome}
                onChange={this.onChangeInputNome}
                placeholder={"Nome"}
            />
            </InputNome>
            <InputMensagem>
            <input 
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}
                placeholder={"Mensagem"}
            />
            </InputMensagem>
            <button onClick={this.adicionaMensagem}>Enviar</button>
            </EstilosContainer>
        </div>
      );
  
    }
  }

export default CompoApp;
