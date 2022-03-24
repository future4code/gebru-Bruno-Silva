import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from 'styled-components';

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

    <div>
        <button onClick={props.goToTelaMatches}>Matches</button>
        { profileToChoose ? 
        <div>
            <p>
                <img src={profileToChoose.photo} />
            </p>
            <p>
                {profileToChoose.name}
            </p>
            <p>
                {profileToChoose.age}
            </p>
            <p>
                {profileToChoose.bio}
            </p>
        </div> : 'Carregando...' }
        <button onClick={() => choosePersonDeslike(profileToChoose.id)}>X</button>
        <button onClick={() => choosePersonLike(profileToChoose.id)}>V</button>
    </div>
  );
}

export default Home;