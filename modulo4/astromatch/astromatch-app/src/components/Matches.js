import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from 'styled-components';
import Button from '@mui/material/Button';

const ListaMatches = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0px solid black;
    cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    margin: 10px;
    vertical-align: middle;
  }
`
const EstiloButtonMatches = styled.div `
  position: fixed;

  @media screen and (min-device-width : 320px) and (max-device-width : 850px) {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
`

const Container = styled.div `
    @media screen and (min-device-width : 320px) and (max-device-width : 850px) {
      height: 100vh;
      position: fixed;
      margin: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
      border-radius: 50px;
      width: 40px;
      height: 40px;
      }
  }
`

const Matches = (props) => {

  const [ matches, setMatches ] = useState([])

  useEffect(() => {

    const getMatches = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-gebru/matches`)
        .then(response => {
          setMatches(response.data.matches);
        })
        .catch(err => {
            console.log(err);
        });
    };

    getMatches()

    }, [])

    const newMatches = matches.map((match) => {
      return <ol key={matches.id}> <img src={match.photo} /> {match.name} </ol>
    })

  return (
    <Container>
      <EstiloButtonMatches>
      <Button onClick={props.goToTelaInicial} variant="contained" color="primary" >Início</Button>
      </EstiloButtonMatches>
      <ListaMatches>
      {newMatches}
      </ListaMatches>
    </Container>
  );
}

export default Matches;