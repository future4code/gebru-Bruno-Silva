import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {

  useProtectedPage();

  return (
    <div>
      <header>
        CreateTripPage
      </header>
    </div>
  );
}

export default CreateTripPage;