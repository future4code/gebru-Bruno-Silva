import React from 'react';
import styled from 'styled-components'

const EstilosCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid; 
    margin-bottom: 10px;
    height: 100px;
`

const ImagensCardPequeno = styled.img `
    margin-right: 10px;
    margin-left: 10px;
`


function CardPequeno(props) {
    return (
        <EstilosCardPequeno>
            <ImagensCardPequeno src={ props.imagem } />
            <p> <b>{ props.nome }</b>
                { props.descricao }</p>
        </EstilosCardPequeno>
    )
}

export default CardPequeno;