import React from "react";
import styled from "styled-components";
import Trip from "../components/privado/TripDetails"
import { useNavigate } from "react-router-dom";

const ContainerUsuario = styled.div`
`

export default function TripDatail() {
    const navigate = useNavigate()
    return(
        <ContainerUsuario>
            <Trip/>
            <button onClick={()=>navigate("/adimin/trips/:id")}>Voltar</button>
        </ContainerUsuario>
    )
}