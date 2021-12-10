// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => a - b)
      return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let array2 = []
    for(let i of array) {
        if(i % 2 === 0) {
            array2.push(i)
        }
    }
  return array2
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let array2 = []
    for(let i of array) {
        if(i % 2 === 0) {
            array2.push(i*i)
        }
    }
  return array2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = Math.max(...array)
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = Math.max(num1, num2)
    let menor = Math.min(num1, num2)
    
    const objetos = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca: maior - menor
    }
    return objetos
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    }
    else if(ladoA !== ladoB && ladoA === ladoC || ladoB === ladoC && ladoB !== ladoA || ladoB === ladoA && ladoB !== ladoC) {
        return "Isósceles"
    }
    else if(ladoA === ladoB && ladoA === ladoC)
    return "Equilátero"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filmes = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
 return `Venha assistir ao filme ${filmes.nome}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores[0]}, ${filmes.atores[1]}, ${filmes.atores[2]}, ${filmes.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let dados = {
       nome: pessoa.nome,
       idade: pessoa.idade,
       email: pessoa.email,
       endereco: pessoa.endereco
   }
   let dadosClone = {...dados,
    nome: "ANÔNIMO"
   }

   return dadosClone
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pess, index, array) => {
        return pess.altura >= 1.5 && pess.idade > 14 && pess.idade < 60
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pess1, index, array) => {
        return pess1.altura < 1.5 || pess1.idade <= 14 || pess1.idade >= 60
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordenado = (a, b) => {
        if (a.nome < b.nome)
           return -1;
        if (a.nome > b.nome)
          return 1;
        return 0;
      }
      
      return consultas.sort(ordenado);
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}