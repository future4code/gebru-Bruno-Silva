import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaUsuarios from "./Components/TelaUsuarios";

export default class App extends React.Component {

  state = {
    trocaTela: true
  }

  trocaDeTela = () => {
    this.setState({ trocaTela: !this.state.trocaTela })
  }

  render() {

    return (
      <div>
        <button onClick={this.trocaDeTela}>Trocar de tela</button><br />
        {this.state.trocaTela ? <TelaCadastro /> : <TelaUsuarios />}
      </div>
    );
  }
}
