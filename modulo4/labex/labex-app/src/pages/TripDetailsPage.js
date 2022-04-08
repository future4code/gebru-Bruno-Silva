import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const TripDetailsPage = () => {

  useProtectedPage();

  useEffect(() => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno/trip/:id"
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };
    axios
    .get(URL, headers)
    .then((res) => {
      console.log(res.data.trip)
    })
    .catch((err) => err.response);
  }, []);

  return (
    <div>
      <header>
        TripDetailsPage
      </header>
    </div>
  );
}

export default TripDetailsPage;