import React from "react";
import styled from "styled-components"
import axios from "axios";
import Cadastro from "./Paginas/Cadastro";
import Usuario from "./Paginas/Usuarios";

const MainConteiner = styled.div` 
display:flex;
justify-content:center;


`
export default class app extends React.Component {

  state = {

    usuarios: [],
    inputUsuario: "",
    inputEmail: "",

    paginaUsuario: false



  }

  componentDidMount() {
    this.pegarUsuario()
    
  }

  adicionarUsuarios = () => {
    const body = {
      name: this.state.inputUsuario,
      email: this.state.inputEmail
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "Tiago-AlbaMoreno-Hopper"
      }
    }).then((resposta) => {
      alert(resposta.data)
    }).catch((err) => {
      alert(err.menssage)
    })
  }

  onChangeUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  pegarUsuario = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "Tiago-AlbaMoreno-Hopper"
      }
    }).then((resposta) => {
      this.setState({ usuario: resposta.data })
      alert(resposta.menssage)
    }).catch((err) => {
      alert(err.menssage)
    })
  }
  onClickPaginaCadastro = () => {
    this.setState({ paginaUsuario: false })
  }
  onClickPaginaUsuario = () => {
    this.setState({ paginaUsuario: true })
  }

  render() {
    console.log(this.state.usuarios)
    
    let novoUsuario = this.state.usuarios.map((novos) => {
      return (
        <div>
          <p>name = {novos.name}</p>
          <p>email = {novos.email}</p>
          <button>Apagar</button>
        </div>



      )
    })

    let pagina;
    if (this.state.paginaUsuario) {
      pagina = <Usuario usuario={novoUsuario} voltar={this.onClickPaginaCadastro} />
    } else {
      pagina = <Cadastro valueUsuario={this.state.inputUsuario} onChangeUsuario={this.onChangeUsuario}
        valueEmail={this.state.inputEmail} onChangeEmail={this.onChangeEmail} IrAoUsuario={this.onClickPaginaUsuario}
        adicionar={this.adicionarUsuarios} />
    }

    return (
      <MainConteiner>

        {pagina}

      </MainConteiner>
    )
  }

}