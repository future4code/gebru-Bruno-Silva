import React from 'react';
import styled from 'styled-components';

export default class Etapa1 extends React.Component {
    render() {
        return ( 
        <div>
        <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
        </div>
        <div>
            <p>1. Qual o seu nome?</p>
            <input />
        </div>
        <div>
            <p>2. Qual sua idade?</p>
            <input />
        </div>
        <div>
            <p>3. Qual o seu e-mail?</p>
            <input />
        </div>
        <div>
            <p>4. Qual a sua escolaridade?</p>
        <select>
            <option value=""></option>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
        </select>
        </div>


        </div>
        );
    }
}


// export default Etapa1;