import React from "react";
import { goToHomePage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      Erro: página não encontrada!
      <button onClick={() => goToHomePage(navigate)}>Voltar para o início</button>
    </div>
  );
}

export default ErrorPage;