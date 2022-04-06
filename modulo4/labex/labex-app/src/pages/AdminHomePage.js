import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import LoginPage from "./LoginPage";

const AdminHomePage = () => {

  useProtectedPage();

  return (
    <div>
      <header>
        AdminHomePage
      </header>
    </div>
  );
}

export default AdminHomePage;