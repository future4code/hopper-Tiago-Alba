import React,{useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { importTrips } from "../components/importTrips";
const MainContainer = styled.div`

`
export default function Trips() {
 const navigate = useNavigate()
    const  [trips, setTrips] = useState([])
    
useEffect(()=>{
    importTrips(setTrips)
},[])
   console.log(trips)
  
    
const trip = trips.map((trip)=>{
    return(
        <div>
           <p>Nome: {trip.name} </p> 
           <p>Descrição: {trip.description} </p> 
           <p>Planeta: {trip.planet} </p> 
           <p>Duração: {trip.durationInDays} </p> 
           <p>Data: {trip.date} </p> 
        </div>
    )
})

    return (
        <MainContainer>

            
            <h1>Lista de viagens </h1>
            {trip}
            <button onClick={()=>navigate("/")}>voltar para Home</button>
        </MainContainer>
    )
}