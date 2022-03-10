import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadstro from "./components/FomularioCadstro/FormularioCadstro";
import { Container } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de Cadastro</h1>
        <FormularioCadstro />
      </Container>
    );
  }
}

export default App;
