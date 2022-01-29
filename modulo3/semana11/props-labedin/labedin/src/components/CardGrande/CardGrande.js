import React from 'react';
import styled from 'styled-components'

const EstilosCardGrande = styled.div ` 
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const EstilosImgCardGrande = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const EstilosH4CardGrande = styled.h4 `
    margin-bottom: 15px;
`

const EstilosCardGrande1 = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <EstilosCardGrande className="bigcard-container">

            <EstilosImgCardGrande src={ props.imagem } />    

            <EstilosCardGrande1>
                <EstilosH4CardGrande>{ props.nome }</EstilosH4CardGrande>
                <p>{ props.descricao }</p>
            </EstilosCardGrande1>

        </EstilosCardGrande>
    )
}

export default CardGrande; 