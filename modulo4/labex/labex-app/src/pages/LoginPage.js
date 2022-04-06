import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from "../routes/coordinator";

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno/login"
    const body = { email: email, password: password };

    axios
    .post(URL, body)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      goToTripDetails(navigate);
    })
    .catch((err) => {
      console.log(err.response)
    })
  };

  return (
    <div>
      <input placeholder="E-mail" type="email" value={email} onChange={onChangeEmail} />
      <input placeholder="Senha" type="password" value={password} onChange={onChangePassword} />
      <button onClick={onSubmitLogin}>Enviar</button>
    </div>
  );
}

export default LoginPage;