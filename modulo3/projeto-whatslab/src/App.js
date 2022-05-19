
import React from 'react';
import styled from "styled-components";
import aquiles from "./img/aquiles.jpg";
import aquiles1 from "./img/aquiles1.jpg";
const MainConteiner = styled.div`
display:grid;
grid-template-columns:1fr 2fr 1fr;
height: 100vh;
`
const Digitando = styled.input`
margin-right: 15%;
width: 50%;
height: 30px;
`
const FundoBranco = styled.div`
background-color: white;
`
const FundoVioleta = styled.div`  
position: relative;
background-color:blueviolet;
border-radius: 40px;
margin-top: 30px;
margin-bottom: 30px ;
 
`
const ImagenAquiles = styled.img` 
max-width: 50px;
max-height: 50px;
border-radius: 100%;
margin-left:5%;
margin-right: 1%;
`
const Usuario = styled.input` 
width: 30%;
height: 30px;
`
const Enviar = styled.button` 
position: relative;
right: 10%;
width: 52px;
height: 31px;
`
const Recebendo = styled.h3`
display: flex;
display: inline;
text-align: center;
`
const InteraCao = styled.div`
display: flex;
align-items: center;
position: absolute;
bottom:0;
width: 100%;
`


export default class app extends React.Component {
  state = {
    conversa: [{
      usuario: "", digitando: ""

    }],

    valorInputUsuario: "",
    valorInputDigitando: "",

  };
  adicionarConversa = () => {
    const conversas = {
      usuario: this.state.valorInputUsuario,
      digitando: this.state.valorInputDigitando

    }
    const novaConversa = [...this.state.conversa, conversas]
    this.setState({ conversa: novaConversa, valorInputDigitando: "" })
  };
  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }
  onChangeInputDigitado = (event) => {
    this.setState({
      valorInputDigitando: event.target.value
    })
  }

  render() {
    const conversando = this.state.conversa.map((conversa) => {
      return (
        <h3>{conversa.usuario}  {conversa.digitando}</h3>

      )

    })
    return (

      <MainConteiner>

        <FundoBranco>
        </FundoBranco>
        <FundoVioleta>
          <Recebendo> {conversando} </Recebendo>
          <InteraCao>
            <ImagenAquiles src={aquiles} />
            <Usuario value={this.state.valorInputUsuario} onChange={this.onChangeInputUsuario} placeholder='Usuario' />
            <Digitando  value={this.state.valorInputDigitando} onChange={this.onChangeInputDigitado} placeholder='Digitando' />
            <Enviar  placeholder='Send' onClick={this.adicionarConversa}>Enviar</Enviar>
          </InteraCao>
        </FundoVioleta>
        <FundoBranco />

      </MainConteiner>

    )
  }
}








