import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from 'styled-components';

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
    
    <div>
      
      <button onClick={props.goToTelaInicial}>Home</button>
      {newMatches}
    </div>
  );
}

export default Matches;