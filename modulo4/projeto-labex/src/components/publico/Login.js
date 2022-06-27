import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MainContainer = styled.div`
`
const StyledImput = styled.input`
`
export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const logged = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tiago-Alba-Moreno/login"
        let body = {
            email: email,
            password: password
        }
        axios.post(url,body,{

        }).then((res)=>{
            
            localStorage.setItem("token",res.data.token)
            navigate("/adimin/trips/:id")
        }).catch((err)=>{
            alert("Usuario não encontrado!")
        })
    }

    return (
        <MainContainer>
            <StyledImput value={email} onChange={onChangeEmail} placeholder="Email" />
            <StyledImput value={password} onChange={onChangePassword} placeholder="Senha" />
            <button onClick={() => logged()}>Entrar</button>
        </MainContainer>
    )

}
export const getToken =  () => localStorage.getItem("token")
