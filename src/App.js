import React, { Component } from "react";
import "./App.css";
import FormularioCadstro from "./components/FomularioCadstro/FormularioCadstro";
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadstro />
      </Container>
    );
  }
}

export default App;
