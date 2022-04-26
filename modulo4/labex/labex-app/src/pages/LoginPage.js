import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToAdminPage } from "../routes/coordinator";
import useForm from "../hooks/useForm";

const LoginPage = () => {

  const { form, onChange, cleanFields } = useForm({email: '', password: ''})
  const navigate = useNavigate()

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno/login"

    axios
    .post(URL, form)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      goToAdminPage(navigate);
    })
    .catch((err) => {
      console.log(err.response)
    })
    cleanFields()
  };

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <input name={'email'} placeholder={'E-mail'} required type={'email'} value={form.email} onChange={onChange} />
        <input name={'password'} placeholder={'Senha'} required type={'password'} value={form.password} onChange={onChange} />
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;