import { React, useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToHomePage, goToCreateTripPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {

  const [ trips, setTrips ] = useState([])

  const navigate = useNavigate()

  useProtectedPage();

  const logOutAdmin = () => {
    localStorage.removeItem("token")
  }

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
    return <li key={trip.id}> 
        <b>Nome: </b>{trip.name}
      </li>
  })

  return (
    <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
        <button onClick={logOutAdmin}>Sair</button>
        {listTrips}
    </div>
  );
}

export default AdminHomePage;