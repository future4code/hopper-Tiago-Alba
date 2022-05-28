import React from "react";
import styled from "styled-components"
import axios from "axios";


const MyPlayList = styled.div`
display:block;
`
let List = styled.div` 

`
export default class PlayList extends React.Component {
    state = {
        lists: [],
        inputPlayList: "",
        inputName: "",
        inputArtist: "",
        inputUrl: ""

    }


    componentDidMount() {
        this.importList()
    }

    importList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "Tiago-AlbaMoreno-Hopper"
            }
        }).then((res) => {

            this.setState({ lists: res.data.result.list })

        }).catch(() => {

        })
    }
    deleteList = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "Tiago-AlbaMoreno-Hopper"
            }
        }).then(() => {
            this.importList()
            alert("Lista de musica deletada")
        }).catch(() => {
            alert("Nada a Deletar")
        })
    }
    addTracks = (id) => {
        let body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputUrl,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, body, {
            headers: {
                Authorization: "Tiago-AlbaMoreno-Hopper"
            }
        }).then(() => {
            alert("track adicionada com sucesso")
        }).catch(() => {
            alert("Erro ocorrido tente mais tarde!")
        })
    }
    onChangeInputPlayList = (e) => {
        this.setState({ inputPlayList: e.target.value })
    }
    onChangeName = (e) => {
        this.setState({ inputName: e.target.value })
    }
    onChangeArtist = (e) => {
        this.setState({ inputArtist: e.target.value })
    }
    onChangeUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }
    verificaId = (inputTrack , list) => {
        let playList = list.find(newList => newList.name === inputTrack)
        return playList.id
        
    }

    render() {
       
         console.log(this.verificaId) 
        let newList = this.state.lists.map((list, index) => {
            return (

                <List >
                    <ul key={index} >
                        <li>
                            {list.name} <button onClick={() => this.deleteList(list.id)}>apagar</button>
                        </li>

                    </ul>


                </List>

            )
        })
        let idTrack = this.verificaId(this.state.inputPlayList, this.state.lists)
        
        console.log(newList)
        return (
            <MyPlayList>
                <h1>PlayLists</h1>
                {newList}
                <div>
                    <h1>Adicionar Tracks</h1>
                    <input value={this.state.inputPlayList} onChange={this.onChangeInputPlayList} placeholder={"Nome PlayList"} />
                    <input value={this.state.inputName} onChange={this.onChangeName} placeholder={"Musica"} />
                    <input value={this.state.inputArtist} onChange={this.onChangeArtist} placeholder={"Artista"} />
                    <input value={this.state.inputUrl} onChange={this.onChangeUrl} placeholder={"Url"} />
                    <button>add tracks</button>
                </div>
                <button onClick={this.props.goBack}>Voltar</button>
            </MyPlayList>
        )
    }
}




