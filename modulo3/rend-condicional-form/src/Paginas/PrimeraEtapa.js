import React from "react";

export default class PrimeiraEtapa extends React.Component {

  render() {
    return (
      <div>
        <h4>Nome</h4>
        <input />
        <h4>Idade</h4>
        <input />
        <h4>Email</h4>
        <input />
        <h4>Escolaridade</h4>
        <select>
          <option>
            Ensino Médio Incompleto
          </option>
          <option>
            Ensino Médio Completo
          </option>
          <option>
            Ensino Superior Incompleto
          </option>
          <option>
            Ensino Superior Completo
          </option>

        </select>
        <button onClick={this.props.onClickSegundaPagina}>Proxima</button>
      </div>
    )
  }
}