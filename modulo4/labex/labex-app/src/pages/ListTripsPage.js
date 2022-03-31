import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

const ListTripsPage = () => {

  const navigate = useNavigate()

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  }

  return (
    <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Quer viajar? Clique aqui!</button>
        ListTripsPage
    </div>
  );
}

export default ListTripsPage;