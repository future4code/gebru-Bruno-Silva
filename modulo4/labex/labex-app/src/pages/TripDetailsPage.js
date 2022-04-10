import { React, useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";

const TripDetailsPage = () => {

  useProtectedPage();

  const [ tripDetails, setTripDetails ] = useState([])

  const pathParams = useParams()

  useEffect(() => {
    getTripDetail()
  }, [])

  const getTripDetail = () => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno/trip/${pathParams.id}`
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };
    axios
    .get(URL, headers)
    .then((res) => {
      // setTripDetails(res.data.trip)
      console.log(res.data.trip)
    })
    .catch((err) => err.response);
  };

  return (
    <div>
        TripDetailsPage
        {/* <title>{tripDetails.trip.name}</title>
        <p><span>Nome:</span> {tripDetails.trip.name}</p>
        <p><span>Descrição:</span> {tripDetails.trip.description}</p>
        <p><span>Planeta:</span> {tripDetails.trip.planet}</p>
        <p><span>Duração:</span> {tripDetails.trip.durationInDays} <span>dias</span></p>
        <p><span>Data:</span> {tripDetails.trip.date}</p> */}
    </div>
  );
}

export default TripDetailsPage;