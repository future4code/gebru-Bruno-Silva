import { React, useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToHomePage, goToCreateTripPage, goToTripDetails } from "../routes/coordinator";
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

  const deletTrip = (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno/trips/${id}`
    const token = localStorage.getItem("token")
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };

    axios
      .delete(URL, headers)
      .then((res) => {
        alert("Viagem Deletada!")

        })
      .catch((err) => {
        alert(err.response)
        })
      }
  

  const listTrips = trips.map((trip) => {
    return <li key={trip.id}> 
            <button onClick={() => goToTripDetails(navigate)}>Detalhes</button>
            <b>Nome: </b>{trip.name} 
            <button onClick={() => deletTrip(trip.id)}>Deletar</button>
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