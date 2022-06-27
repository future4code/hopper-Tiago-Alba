import React, {useEffect}  from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { UserProtector } from "../components/userProtector";



const ContainerHome = styled.div`
`

export default function Home(){
   const navigate = useNavigate() 
    UserProtector()


   
return(
<ContainerHome>
    
    <h1>Home</h1>
    
    <button onClick={()=>navigate("/login")}>Logar</button>
    <button onClick={()=>navigate("/trips/list")}>Ver Viagens</button>
</ContainerHome>
)

}