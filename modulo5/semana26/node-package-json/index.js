// Exercício 1 a) Criando um arquivo index.js e usando o process.argv.

//b) e c)

    const nome = "Bruno"
    const idade = Number("26")

    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)

// Exercício 2

    const num1 = Number(process.argv[2])
    const num2 = Number(process.argv[3])
    const operacao = process.argv[4]
    
    switch(operacao){
        case "add":
            console.log(num1 + num2)
            break;
        case "sub":
            console.log(num1 - num2)
            break;
        case "mult":
            console.log(num1 * num2)
            break;
        case "div":
            console.log(num1 % num2)
            break
        default:
            console.log("Erro")
    }

    // Exercício 3

        const listaDeTarefas = ["tomar água"]

        const tarefa = process.argv[2]

        listaDeTarefas.push(tarefa)

        console.log(listaDeTarefas)