import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

const ApplicationFormPage = () => {

  const navigate = useNavigate()

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  }

  return (
    <div>
      <header>
        ApplicationFormPage
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button>Enviar</button>
      </header>
    </div>
  );
}

export default ApplicationFormPage;