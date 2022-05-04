import React from "react";
import PrimeiraEtapa from "./Paginas/PrimeraEtapa";
import SegundaEtapa from "./Paginas/SegundaEtapa";
import TerceiraEtapa from "./Paginas/TerceiraEtapa";
import QuartaEtapa from "./Paginas/QuartaEtapa";
import style from "styled-components"


const MainConteiner = style.div`

`;
export default class app extends React.Component {
  state = {
    segundaPagina: false,
    terceiraPagina: false,
    quartaPagina: false
  };
  paginaDois = () =>{
    this.setState({segundaPagina :true})
  };
  paginaTres = () =>{
    this.setState({terceiraPagina :true})
  }
  paginaQuato = () =>{
    this.setState({quartaPagina :true})
  }

  render() {

    let pagina;
    if (this.state.segundaPagina) {
      pagina = <SegundaEtapa onClickTerceiraPagina ={this.paginaTres}/>
    }else{
      pagina  = <PrimeiraEtapa onClickSegundaPagina={this.paginaDois}/>
    }
    if (this.state.segundaPagina && this.state.terceiraPagina) {
      pagina = <TerceiraEtapa  onClickQuartaPagina={this.paginaQuato}/>
    }
    if (this.state.segundaPagina && this.state.terceiraPagina && this.state.quartaPagina) {
      pagina = <QuartaEtapa />
    };
    return (
      <MainConteiner>
        <h1>Dados Gerais</h1>
        {pagina}
      </MainConteiner>
    )
  }
}