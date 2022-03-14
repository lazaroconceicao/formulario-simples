import React, { Component } from "react";
import "./App.css";
import FormularioCadstro from "./components/FomularioCadstro/FormularioCadstro";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadstro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto:"CPF deve ter 11 dígito"}
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
