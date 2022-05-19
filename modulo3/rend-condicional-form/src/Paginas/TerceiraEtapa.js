import React from "react";

export default class TerceiraEtapa extends React.Component{
  render() {
    return(
      <div>
        <h1> Informações sobre quem não se formou no ensino superior nem está cursando</h1>
        <h4>Por que você não terminou um curso de graduação?</h4>
        <input/>
        <h4>Você fez algum curso complementar? </h4>
        <input/>
        <button onClick={this.props.onClickQuartaPagina}>Proxima</button>
      </div>
    )
  }
}