import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  state = {

    usuarios : [
      { nomeUsuario: "paulinha",
      fotoUsuario :"https://picsum.photos/50/50", 
      fotoPost:"https://picsum.photos/200/150"} ,
      {nomeUsuario :"Tiago",
      fotoUsuario :'https://picsum.photos/50/51',
      fotoPost :'https://picsum.photos/200/151'} , 
      {nomeUsuario : 'Marcos',
      fotoUsuario :'https://picsum.photos/50/52',
      fotoPost :'https://picsum.photos/200/152'}
     ] ,
novoNome:"",
novaFoto: "",
novoPost: ""
  }
adicionarPessoa =  () =>{
  const novaPessoa = {
    nomeUsuario: this.state.novoNome,
    fotoUsuario: this.state.novaFoto,
    fotoPost: this.state.novoPost
  }
  const novosUsuarios =[novaPessoa, ...this.state.usuarios  ]
  this.setState({usuarios: novosUsuarios})
}
onChangeImputPessoa = (event)=>{
  this.setState({
    novoNome: event.target.value
  })
}
onChangeImputFoto = (event)=>{
  this.setState({
    novaFoto: event.target.value
  })
}
onChangeImputPost = (event)=>{
  this.setState({
    novoPost: event.target.value
  })
}

  render() {
   const listaDeUsuarios = this.state.usuarios.map((novo)=>{
      return  <Post key={novo.nomeUsuario} nomeUsuario = {novo.nomeUsuario}
                     fotoUsuario = {novo.fotoUsuario}
                     fotoPost = {novo.fotoUsuario} />
    })
    return (
      <MainContainer>
     <input value={this.state.novoNome} onChange={this.onChangeImputPessoa}/>
     <input value={this.state.novaFoto} onChange={this.onChangeImputFoto} />
     <input value={this.state.novoPost} onChange={this.onChangeImputPost} />
     <button onClick={this.adicionarPessoa}>Adicionar</button>
      {listaDeUsuarios}
       
        
        
      </MainContainer>
    );
  }
}

export default App;
