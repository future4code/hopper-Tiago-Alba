import React,{useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components"
import CardMatche from "../componentes/CardMatche";
const MainContainer = styled.div`
`

export default function Matches() {
    const [matchs , setMachs] = useState([])

    useEffect(()=>{
        importMatchs()
    },[])

    const importMatchs = () =>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/matches",{

        }).then((res)=>{
            setMachs(res.data.matches)
            
        }).catch(()=>{
            alert("Nada Encontrado!")
        })
    }
    const clearMatchs = () =>{
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/clear",{
            
        }).then(()=>{
            alert("lista deletada")
            importMatchs()
        }).catch(()=>{
                alert("Lista Vazia")
        })
    }
    return (
        <MainContainer>
            <h1>Meus Crushs</h1>
            <button onClick={()=>clearMatchs()} >Limpar lista</button>
            <CardMatche person={matchs} />
            
        </MainContainer>
    )
} 