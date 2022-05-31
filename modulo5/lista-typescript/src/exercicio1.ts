const frase = (nome:string, data:string):string => {
    // const nome = "Bruno"
    // const data = "5/setembro/1995"

    const divisao = data.split("/")

    return `Olá me chamo ${nome}, nasci no dia ${divisao[0]} do mês de ${divisao[1]} do ano de ${divisao[2]}`
   
}