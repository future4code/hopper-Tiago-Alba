import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerTrip = styled.div`

`
const ImputTrip = styled.input`

`
const Add = styled.button`

`

export default function PostTrip(props) {
    
    const [newName, setNewName] = useState("")
    const [newtrip, setNewTrip] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newDescript, setNewDescript] = useState("")
    const [days, setDays] = useState(0)

    const onChangeName = (event) => {
        
        setNewName(event.target.value)

    }
    const onChangeTrip = (event) => {

        setNewTrip(event.target.value)

    }
    const onChangeDate = (event) => {

        setNewDate(event.target.value)

    }
    const onChangeDescript = (event) => {

        setNewDescript(event.target.value)

    }
    const onChangeDay = (event) => {

        setDays(event.target.value)

    }
    let token = localStorage.getItem("token")
    
    const trips = () => {
        console.log(token)
        let body = {
            name: newName,
            planet: newtrip,
            date: newDate,
            description: newDescript,
            durationInDays: days
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tiago-Alba-Moreno/trips", body, {
            headers: {
                auth:token
            } 
        }).then((res) => {
            alert("Viagem adicionada")
           
        }).catch((err) => {
            console.log(err.data)
            alert("Erro ao criar viagem")
            
        });

    }

    return (
        <ContainerTrip>
            <ImputTrip value={newName} onChange={onChangeName} placeholder="Nome da Viagem" />
            <ImputTrip value={newtrip} onChange={onChangeTrip} placeholder="Planeta" />
            <ImputTrip value={newDate} onChange={onChangeDate} placeholder="data" />
            <ImputTrip value={newDescript} onChange={onChangeDescript} placeholder="Descrição" /> 
            <ImputTrip value={days} onChange={onChangeDay} placeholder="Por quantos Dias" />
            <Add onClick={()=>trips()}>Adicionar</Add>
         </ContainerTrip>

    )

}