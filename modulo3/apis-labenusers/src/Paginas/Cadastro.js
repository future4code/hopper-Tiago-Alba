import React from "react";
import styled from "styled-components"



const NovosCadastros = styled.div`
`

export default class Cadastro extends React.Component {
   
    render() {
        return (
            <NovosCadastros>
                <div>
                    <h1>Cadastro</h1>
                    <input value={this.props.valueUsuario} onChange={this.props.onChangeUsuario} placeholder={"nome:"} />
                    <input value={this.props.valueEmail} onChange={this.props.onChangeEmail} placeholder={"Email"} />
                    <button onClick={this.props.adicionar} >adicionar</button> <button onClick={this.props.IrAoUsuario} >Ir para Usuario </button>
                </div>
            </NovosCadastros>
        )
    }
}