import React from "react";
import styled from "styled-components";
import NewLogin from "../components/publico/Login"
import NewSig from "../components/publico/Sig"
const ContainerLogin = styled.div`

`

export default function Login() {

    return (
        <ContainerLogin>
            <div>
                <h1>Logar</h1>
                <NewLogin />
                <h3>Já tem uma conta ?</h3>
            </div>

            <div>
                <h1>Criar uma conta </h1>
                <NewSig />
            </div>


        </ContainerLogin>
    )

}