import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate()

  const goToListTripsPage = () => {
    navigate("/trips/list")
  }

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  return (
    <div>
        HomePage
        <button onClick={goToListTripsPage}>Lista de viagens</button>
        <button onClick={goToAdminHomePage}>Área administrativa</button>
    </div>
  );
}

export default HomePage;