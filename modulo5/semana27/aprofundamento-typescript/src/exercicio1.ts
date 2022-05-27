// exercicio 1
//a)
   // const minhaString:string = 10 -> O tipo number não pode ser atribuído ao tipo string

//b)

    const meuNumero:number = 10 // Utilizando o Union Type

//c) 

    const pessoa: {nome: string, idade: number, corFavorita: string} = {
        nome: "Bruno",
        idade: 26,
        corFavorita: "azul"
    }

//c) e d)

    type pessoa = {
        nome: string,
        idade: number,
        corFavorita: string
    }

    enum cores {
        VERMELHA = "vermelha",
        LARANJA = "laranja",
        AMARELA = "amarela",
        VERDE = "verde",
        AZUL = "azul",
        VIOLETA = "violeta"
    }

    const pessoa1: pessoa = {
        nome: "astrodev",
        idade: 20,
        corFavorita: cores.VERDE
    }

    const pessoa2: pessoa = {
        nome: "astradev",
        idade: 25,
        corFavorita: cores.VERMELHA
    }

