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
  removerUsuario = (id) => {
    let start = window.confirm ("voce realmente deseja excluir este usuario?")
    if(start){
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: "Tiago-AlbaMoreno-Hopper"
        }
      }).then(() => {
        
             
          alert("usuario deletado")
      this.pegarUsuario()
      }).catch(() => {
        alert("Deu ruim")
      })
    }
    
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
      this.setState({ inputUsuario: "", inputEmail: "" })
      this.pegarUsuario()
      alert("Usuario criado com Sucesso")
    }).catch((err) => {
      alert("Deu ruim")
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
      this.setState({ usuarios: resposta.data, })


    }).catch((err) => {

    })
  }
  onClickPaginaCadastro = () => {
    this.setState({ paginaUsuario: false })
  }
  onClickPaginaUsuario = () => {
    this.setState({ paginaUsuario: true })
  }

  render() {


    let novoUsuario = this.state.usuarios.map((novo) => {
      return (
        <div key={novo.id}>
          <p>name: {novo.name}</p>
         
          <button onClick={() => this.removerUsuario(novo.id)}>Apagar</button>
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


        
    
    