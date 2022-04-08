import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinator";

const ListTripsPage = () => {

  const [ trips, setTrips ] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno/trips"
    axios
    .get(URL)
    .then((res) => {
      setTrips(res.data.trips)
    })
    .catch((err) => err.response);
  }, []);

  const listTrips =  trips.map((trip) => {
    return <ol key={trip.id}> 
        <p><b>Nome: </b>{trip.name}</p> 
        <p><b>Descrição: </b>{trip.description}</p> 
        <p><b>Planeta: </b>{trip.planet}</p> 
        <p><b>Duração: </b>{trip.durationInDays}</p> 
        <p><b>Data: </b>{trip.date}</p> 
      </ol>
  })

  return (
    <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(navigate)}>Quer viajar? Clique aqui!</button>
        {listTrips}
    </div>
  );
}

export default ListTripsPage;