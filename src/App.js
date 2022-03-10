import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadstro from "./components/FomularioCadstro/FormularioCadstro";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadstro />
      </Fragment>
    );
  }
}

export default App;
