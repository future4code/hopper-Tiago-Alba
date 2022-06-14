import React from "react";
import styled from "styled-components"
import axios from "axios";
import coracao from "../Img/purplecoracao.jpg"
import coracaoBotao from "../Img/iconeCoracao.png"
import botaoX from "../Img/botaoX.jpg"



const Card = styled.div`
display:flex;

width: 50vw;
height: 50vw;
text-align:center;
align-items:center;
justify-content: center;
background-color:#501B4A;
`
const Photo = styled.img`
width: 15em;
height: 30vh;
margin-top:30px;
margin-bottom:30px;
border-radius:20px;
`
const NewCard = styled.div`
border-style: ridge;
border-width: 15px;
width: 50vh;
height:60vh;
background-image: url(${coracao});
color:whitesmoke;
p {
margin-top: 10px;
}
`
const ImgMatch = styled.img`

:hover{
    cursor: pointer;
    
}

align-items:center;
text-align:center;
align-self:center;
align-content:center;
width: 30px;
border-radius:30px;
`
const DivBotao = styled.div`
display:flex;
justify-content:space-around;
margin-top:5vh;
button {
    display:flex;
   border-radius:30px;
   background-color:black;
}

`

export default function CardHome(props) {



    const match = (choiceId, next) => {
        let body = {
            id: choiceId,
            choice: true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/choose-person", body, {

        }).then(() => {
            alert("Deu match!")
            next()
        }).catch(() => {
            alert("Não gostei!")
        })
    }

    const person = [props.newPerson]

    const newPerson = person.map((stats, index) => {

        return (
            <NewCard>
                <Photo src={stats.photo} />
                <p>Nome: {stats.name} </p>
                <p>Idade: {stats.age} </p>
                <p>Bio: {stats.bio} </p>
                <DivBotao>
                    <button onClick={(props.choice)}> <ImgMatch src={botaoX} /> </button>
                    <button onClick={() => match(stats.id, props.next)}> <ImgMatch src={coracaoBotao} /> </button>
                </DivBotao>



            </NewCard>

        )

    })

    return (

        <Card>

            {newPerson}
        </Card>
    )
}

