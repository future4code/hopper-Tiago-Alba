import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserProtector } from "../components/userProtector";
const ContainerAdmin = styled.div`
`

export default function Admin(){
    const navigate = useNavigate()
    UserProtector()
    const clearToken = () =>{
        localStorage.setItem("token","")
        navigate("/")
     
        }
return(
<ContainerAdmin>
    <h1>Area do Admin</h1>
    <button onClick={()=>navigate("/admin/trips/create")}>Criar Viagem</button>
    <button onClick={()=>clearToken()}>Deslogar</button>
    <button onClick={()=>navigate("/admin/trips/list")}>Viagens</button>
</ContainerAdmin>
)

}