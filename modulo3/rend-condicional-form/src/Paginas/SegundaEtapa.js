import React from "react";

export default class SegundaEtapa extends React.Component{
  render() {
    return(
      <div>
        <h1>nformações educacionais para quem está cursando (ou já terminou) o ensino superior</h1>
        <h4>Qual o curso</h4>
        <input/>
        <h4>Qual a unidade</h4>
        <input/>
        <button onClick = {this.props.onClickTerceiraPagina} >Proxima</button>
      </div>
    )
  }
}