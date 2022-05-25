import React from "react";
import styled from "styled-components"


const NovosUsuarios = styled.div`
text-align: center;
`

export default class Usuario extends React.Component{
    render() {
        return(
<NovosUsuarios>
    <h1>Usuarios</h1>
    {this.props.usuario}
<button onClick={this.props.voltar} >voltar</button>
</NovosUsuarios>
        )
    }
}