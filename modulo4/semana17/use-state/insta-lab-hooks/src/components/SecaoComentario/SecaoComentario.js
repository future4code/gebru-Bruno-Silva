import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {

	const [inputComentario, setinputComentario] = useState("")

	const onChangeComentario = (event) => {
		setinputComentario(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(inputComentario) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario