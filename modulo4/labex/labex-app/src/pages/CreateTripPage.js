import { React, useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToAdminPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/useForm";

const CreateTripPage = () => {

  useProtectedPage();

  const navigate = useNavigate()

  const [tripsCreated, setTripsCreated] = useState([])

  const { form, onChange, cleanFields } = useForm({name: '', planet: '', date: '', description: '', durationInDays: ''})

  const onCreateTrip = (event) => {
    event.preventDefault()
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno/trips"
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

    axios
    .post(URL, form, headers)
    .then((res) => {
      setTripsCreated(res.data);
    })
    .catch((err) => {
      console.log(err.response)
    })
    cleanFields()
  };

  return (
    <div>
      <form onSubmit={onCreateTrip}>
        <p><input name={'name'} placeholder={'Nome'} required type={'name'} value={form.name} onChange={onChange} /></p>
        <p><select name={'planet'} placeholder={'Planeta'} required value={form.planet} onChange={onChange} >
          <option>Escolha um planeta</option>
          <option value={'Mercúrio'}>Mercúrio</option>
          <option value={'Vênus'}>Vênus</option>
          <option value={'Terra'}>Terra</option>
          <option value={'Marte'}>Marte</option>
          <option value={'Jupiter'}>Jupiter</option>
          <option value={'Saturno'}>Saturno</option>
          <option value={'Urano'}>Urano</option>
          <option value={'Netuno'}>Netuno</option>
          <option value={'Plutão'}>Plutão</option>
        </select> </p>
        <p><input name={'date'} placeholder={'Data'} type={'date'} required min="2022-04-08" value={form.date} onChange={onChange} /></p>
        <p><input name={'description'} placeholder={'Descrição'} required pattern={'^.{30,}$'} title={'O nome deve ter no mínimo 30 caracteres'} value={form.description} onChange={onChange} /></p>
        <p><input name={'durationInDays'} placeholder={'Duração em dias'} type={'number'} required min={50} value={form.durationInDays} onChange={onChange} /></p>
        <button onClick={() => goToAdminPage(navigate)}>Voltar</button>
        <button>Criar</button>
      </form>
      
    </div>
  );
}

export default CreateTripPage;