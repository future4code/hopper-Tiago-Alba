import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"
import CardHome from "../componentes/CardHome";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
`

const MainContainer = styled.div`
background-color:blanchedalmond;
width: 100vw;
height: 100vh;
text-align:center;



`
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;

`


export default function Home() {


    const [person, setPerson] = useState([])

    useEffect(() => {
        importPerson()
    }, [])



    const importPerson = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/person", {

        }).then((res) => {
            setPerson(res.data.profile)

        }).catch((err) => {
            alert("Nada encontrado!")
        })


    }

    return (
        <MainContainer>
           <h1>Crush</h1>
            <GlobalStyle />
            <Container>
            
            <CardHome newPerson={person} next={() => importPerson()} choice={() => importPerson()} />

            </Container>
           

        </MainContainer>
    )
}


