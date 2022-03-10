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
        users: [],
        searchInput: ""
    }

    componentDidMount(){
        this.getAllUsers()
    }
  
  getAllUsers = () => {
    axios
    .get(urlUsers, headers)
    .then(res => {
        this.setState({users: res.data})
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  searchUsers = () => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.searchInput}&email=`, headers)
    .then(res => {
        this.setState({users: res.data})
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  deleteUser = (userId) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, headers)
    .then(res => {
        alert('Usuário deletado com sucesso!')
        this.getAllUsers()
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  onUserSearchChange = (e) => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    
    const usersComponents = this.state.users.map((user) => {
        return <li key={user.id}> {user.name} <button onClick={() => this.deleteUser(user.id)}>X</button> </li>
    });

    return (
      <div>
          {usersComponents}<br /><hr />
          <h4>Procurar usuário</h4><br />
          <input placeholder="Nome exato para busca" value={this.state.searchInput} onChange={this.onUserSearchChange}></input>
          <button onClick={this.searchUsers}>Salvar edição</button>
      </div>
    );
  }
}
