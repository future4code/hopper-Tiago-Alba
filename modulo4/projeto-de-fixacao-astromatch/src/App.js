import React, { useState } from "react";
import styled from "styled-components"
import Home from "./Pagina/Home";
import Matches from "./Pagina/Matches";

const MainContainer = styled.div`
display:flex;
align-content:center;
`

export default function App() {
  const [page , setPage] = useState(false)
  const [homeAndMatch , setHomeAndMatch] = useState("Ver Matchs")

const changePage = () =>{
  if(page){
    setPage(false)
   setHomeAndMatch("Ver Matchs")
  }else{
    setPage(true)
    setHomeAndMatch("Voltar")
  }
}
  let pagina;
    if(page){
      pagina = <Matches/>
    }else{
      pagina = <Home/>
    }
  

  return (
    <MainContainer>
     {pagina}
     <div><button onClick={()=>changePage()}>{homeAndMatch}</button></div>
     
    </MainContainer>
  )

}