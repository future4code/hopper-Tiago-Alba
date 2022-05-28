import React from "react";
import styled from "styled-components"
import axios from "axios";

const AddPlayList = styled.div`
`
export default class CriandoPlayList extends React.Component {
    state = {
        imputPlayList: "",
        
    }
    onChangePlayList = (event) => {
        this.setState({ imputPlayList: event.target.value })
    }
    
    newPlaylist = () => {
        let body = {
            name: this.state.imputPlayList
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "Tiago-AlbaMoreno-Hopper"
            }
        }).then(() => {
            alert("Lista criada com sucesso")
        }).catch(() => {
            alert("Lista ja existente")
        })
    }
    render() {
        return (
            <AddPlayList>
                <h1>Criando Play List</h1>
                <input value={this.state.imputPlayList} onChange={this.onChangePlayList} />
                <button onClick={this.newPlaylist}>Adicionar</button>
                <button onClick={this.props.goToPlayList}>PlayList</button>
            </AddPlayList>
        )
    }
}