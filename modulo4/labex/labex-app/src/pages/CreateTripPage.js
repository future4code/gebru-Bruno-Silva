import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToAdminPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const CreateTripPage = () => {

  useProtectedPage();

  const navigate = useNavigate()

  return (
    <div>
      Criar Viagem
      <button onClick={() => goToAdminPage(navigate)}>Voltar</button>
      <button>Criar</button>
    </div>
  );
}

export default CreateTripPage;