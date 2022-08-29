import React  from "react";
import styled from "styled-components"

const Card = styled.div`

`
const Photo = styled.img`
width: 300px;
height: 300px;

`
export default function CardMatche(props) {

    const matchs = props.person
    

    let person = matchs.map((mat,index) => {
        return (
            <div key={index} >
                <Photo src={mat.photo} />
                <p>Nome:{mat.name}</p>
                <p>Idade:{mat.age}</p>
                <p>Bio:{mat.bio}</p>
            </div>

        )
})

    return (
        <Card>
            {person}
        </Card>
    )
}

