import React from "react";
import styled from "styled-components"
import PlayList from "./Paginas/PlayList";
import CreatePlayList from "./Paginas/CreatePlayList";


const MainContainer = styled.div`

`

export default class App extends React.Component {
  state = {
    page: false
  }
  onClickPlayList = () =>{
    this.setState({page:true})
  }
  onClickCreatePlayList = () => {
    this.setState({page:false})
  }
  render() {
    let page;
    if (this.state.page){
      page =  <PlayList goBack ={this.onClickCreatePlayList} />
    }else{
      page =  <CreatePlayList goToPlayList = {this.onClickPlayList} />
    }
    return (
      <MainContainer>
        {page}
      </MainContainer>
    )
  }
}