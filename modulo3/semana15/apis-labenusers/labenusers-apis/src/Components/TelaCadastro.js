import React from "react";
import axios from "axios";

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "bruno-moura-gebru"
  }
}

export default class TelaCadastro extends React.Component {

  state = {
    userInput: "",
    emailInput: ""
  }
 
  createUsers = () => {
    const body = {
      name: this.state.userInput,
      email: this.state.emailInput
    }
    axios
    .post(urlUsers, body, headers)
    .then((res) => {
      alert (`O usuário ${this.state.userInput} foi adicionado!`)
      this.setState({userInput: ""})
      this.setState({emailInput: ""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  onUserNameChange = (e) => {
    this.setState({userInput: e.target.value})
  }
  
  onEmailTextChange = (e) => {
    this.setState({emailInput: e.target.value})
  }


  render() {
    return (
      <div>
        <input placeholder="Nome" value={this.state.userInput} onChange={this.onUserNameChange}></input>
        <input placeholder="E-mail" value={this.state.emailInput} onChange={this.onEmailTextChange}></input>
        <button onClick={this.createUsers}>Criar Usuário</button>
      </div>
    );
  }
}