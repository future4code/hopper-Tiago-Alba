import axios from "axios";
import styled from "styled-components";
import React, {useState} from "react";

const MainContainer = styled.div`
`
const StyledImput = styled.input`
`

export default function Sig(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }
    const newSig = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tiago-Alba-Moreno/signup "
        let body = {
        email:email,
        password: password
        }
        axios.post(url,body,{

        }).then((ress)=>{
            alert("Usuario criado com sucesso!")
         
        }).catch((err)=>{
            alert("Usuario ou email já cadastrado!")
        })
    }
    return(
<MainContainer>
    <StyledImput value={email} onChange={onChangeEmail} placeholder="Email"  />
    <StyledImput value={password} onChange={onChangePassword} placeholder="Senha" />
    <button onClick={()=>newSig()}>Criar</button>
</MainContainer>
    )
}