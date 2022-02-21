import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {

  };

  componentDidMount() {
    const tarefas = localStorage.getItem('Tarefas') ? JSON.parse(localStorage.getItem ("Tarefas")) : []
    this.setState({tarefas: tarefas})
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = 
    { id: Date.now(), 
      texto: this.state.inputValue, 
      completa: false
    }
    
    const copiaDoEstado = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: copiaDoEstado})

    localStorage.setItem("Tarefas", JSON.stringify(copiaDoEstado))

    this.setState({ inputValue: '' })
  }

  selectTarefa = (id) => {
    const propriedadeTarefa = this.state.tarefas.map((propriedade) => {
      if(id === propriedade.id) {
        const alteraPropriedade = {
          ...propriedade,
          completa: !propriedade.completa
        }
        return alteraPropriedade
      } else {
        return propriedade
      }
    })
    this.setState({tarefas: propriedadeTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
