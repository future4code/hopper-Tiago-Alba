import React  from "react";
import styled from "styled-components";
import Trip from "../components/privado/PostTrips"
import { useNavigate } from "react-router-dom";
const MainContainer = styled.div`

`

export default function CreateTripPage() {
const navigate = useNavigate()
    return (
        <MainContainer>
        <Trip/>
        <button onClick={()=>navigate("/adimin/trips/:id")} >Voltar</button>
        </MainContainer>
    )
}