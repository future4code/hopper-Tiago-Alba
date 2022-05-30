import React from "react";
import styled from "styled-components"
import axios from "axios";


const MainContainer = styled.div`

`
const MyPlayList = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
background-color:burlywood;
height: 100vh;

`
const Tracks = styled.div` 


`
const ShowList = styled.button`
:hover{
   cursor: pointer;
   };
   
border:none !important;
background-color: burlywood !important;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
font-size: 20px;



`
const Labefy = styled.header`
background-color:orange;
padding-bottom: 20px;
text-align:center;

`
const LiPlayList = styled.li`
margin-bottom: 3%;

`


export default class PlayList extends React.Component {
    state = {
        lists: [],
        inputPlayList: "",
        inputName: "",
        inputArtist: "",
        inputUrl: "",
        trackList: [],
        idPlayList: ""

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
            console.log(res)
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
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
                Authorization: "Tiago-AlbaMoreno-Hopper"
            }
        }).then(() => {
            alert("track adicionada com sucesso")
            this.setState({ inputName: "", inputArtist: "", inputUrl: "" })
            this.importTracks(id)
        }).catch(() => {
            alert("Erro ocorrido tente mais tarde!")
        })
    }
    importTracks = (id) => {
        this.setState({ idPlayList: id })
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: "Tiago-AlbaMoreno-Hopper"
            }
        }).then((res) => {
            console.log(res.data)
            this.setState({ trackList: res.data.result.tracks })

        }).catch(() => {
            alert("Nada encontrado!")
        })
    }
    deleteTrack = (id, idPlayList) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlayList}/tracks/${id}`, {
            headers: {
                Authorization: "Tiago-AlbaMoreno-Hopper"
            }
        }).then(() => {
            this.importTracks(idPlayList)
            alert("Track deletada com sucesso!")
        }).catch(() => {
            alert("Nada encontrado!")


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
    checkId = () => {

        let playList = this.state.lists.find(newList => newList.name === this.state.inputPlayList)
        this.addTracks(playList.id)

    }


    render() {


        let newList = this.state.lists.map((list, index) => {
            return (
                <LiPlayList key={index} >
                    <ShowList onClick={() => this.importTracks(list.id)}> {list.name}</ShowList>  <button onClick={() => this.deleteList(list.id)}>apagar</button>
                </LiPlayList>

            )
        })

        let newTrackList = this.state.trackList.map((list, index) => {
            return (
                <li key={index}>
                    <button onClick={() => this.deleteTrack(list.id, this.state.idPlayList)}>Apagar</button>
                    <p>Musica: {list.name} </p>
                    <p>Artista: {list.artist} </p>
                    <audio controls="control">
                        <source src={list.url} type="audio/mp3" />escute</audio>



                </li>
            )
        })

        return (
            <MainContainer>
                <Labefy>
                    <h2>Labefy</h2>
                </Labefy>
                <MyPlayList>
                    <div>
                        <h1>PlayLists</h1>
                        {newList}
                        <button onClick={this.props.goBack}>Voltar</button>
                    </div>

                    <Tracks>
                        <h1>Tracks</h1>
                        <ul>
                            <h4>{newTrackList}</h4>
                        </ul>
                    </Tracks>

                    <div>
                        <h1>Adicionar Tracks</h1>
                        <input value={this.state.inputPlayList} onChange={this.onChangeInputPlayList} placeholder="Nome PlayList" />
                        <input value={this.state.inputName} onChange={this.onChangeName} placeholder="Musica" />
                        <input value={this.state.inputArtist} onChange={this.onChangeArtist} placeholder="Artista" />
                        <input value={this.state.inputUrl} onChange={this.onChangeUrl} placeholder="Url" />
                        <button onClick={this.checkId}>add tracks</button>
                    </div>


                </MyPlayList>
            </MainContainer>

        )
    }
}











