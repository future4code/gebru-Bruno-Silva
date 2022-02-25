import React from "react";
import axios from "axios";

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "bruno-moura-gebru"
  }
}

export default class TelaUsuarios extends React.Component {

    state = {
        users: []
    }

    componentDidMount(){
        this.getAllUsers()
    }
  
  getAllUsers = () => {
    axios
    .get(urlUsers, headers)
    .then((res) => {
        this.setState({users: res.data.result.list})
    })
    .catch((err) => {})
  }

  render() {
    
    const usersComponents = this.state.users.map((user) => {
        return <li key={user.id}> {user.name} </li>
    })

    return (
      <div>
          <button>Trocar de tela</button><br /><hr></hr>
          {usersComponents}
          <h4>Procurar usuário</h4><br />
          <input Placeholder="Nome exato para busca"></input>
          <button>Salvar edição</button>
      </div>
    );
  }

}
