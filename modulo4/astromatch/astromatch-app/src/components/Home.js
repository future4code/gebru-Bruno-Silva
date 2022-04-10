import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from 'styled-components';
import Button from '@mui/material/Button';

const EstiloHome = styled.div `
  display: grid;
  text-align: center;
  align-items: center;
  padding: 100px;
`
const EstiloButtonHome = styled.div `
  position: fixed;
`
const Container = styled.div `
  
  @media screen and (min-device-width : 320px) and (max-device-width : 850px) {
      width: 100vw;
      height: 100vh;
      position: fixed;
      margin: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
      border-radius: 50px;
      width: 200px;
      height: 250px;
      }
  }
`  

const Home = (props) => {

const [ profileToChoose, setProfileToChoose ] = useState()
const [ chosenProfile, setChosenProfile ] = useState()

const headers = {
    'Content-Type': 'application/json'
};

useEffect(() => {

    const getProfileToChoose = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-gebru/person`)
        .then(response => {
            setProfileToChoose(response.data.profile);
        })
        .catch(err => {
            console.log(err);
        });
    };

    getProfileToChoose()

    }, [chosenProfile])

    const choosePersonLike = (identify) => {
        
        const body = {
            id: identify,
	        choice: true
        }
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-gebru/choose-person', body, headers)
        .then(res => { setChosenProfile(!chosenProfile) })
        .catch(err => {console.log(err.response.data.message)})
    }

    const choosePersonDeslike = (identify) => {
        
        const body = {
            id: identify,
	        choice: false
        }
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-gebru/choose-person', body, headers)
        .then(res => { setChosenProfile(!chosenProfile) })
        .catch(err => {console.log(err.response.data.message)})
    }


  return (
    <Container>
        <EstiloButtonHome>
        <Button onClick={props.goToTelaMatches} variant="contained" color="primary" >Seus Matches</Button>
        </EstiloButtonHome>
        <EstiloHome>
        { profileToChoose ? 
        <div>
            <p>
            <Button onClick={() => choosePersonDeslike(profileToChoose.id)} variant="contained" color="error" >Não Gostei</Button>
            <img src={profileToChoose.photo} />
            <Button onClick={() => choosePersonLike(profileToChoose.id)} variant="contained" color="success" >Gostei!</Button>
            </p>
            <p>
                {profileToChoose.name}, {profileToChoose.age} anos.
            </p>
            <p>
                "{profileToChoose.bio}"
            </p>
        </div> : <p> Carregando... </p>}
        </EstiloHome>
    </Container>
  );
}

export default Home;