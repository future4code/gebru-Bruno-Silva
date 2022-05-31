type filme = {
    nome: string,
    genero: GENERO,
    anoDeLancamento: number,
    pontuacao?: number
}


enum GENERO {
    COMEDIA="comédia",
	DRAMA="drama",
	ROMANCE="romance",
	TERROR="terror",
    ACAO="ação"
}


const listaFilmes = (nomeFilme:string, anoDeLancamentoFilme:number, generoFilme:GENERO, pontuacaoDoFilme?:number):filme => {
    const filmes:filme = {
        nome: nomeFilme,
        anoDeLancamento: anoDeLancamentoFilme,
        genero: generoFilme,
        pontuacao: pontuacaoDoFilme
    }
    return filmes
} 