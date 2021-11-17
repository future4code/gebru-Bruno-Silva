/* Exercícios de interpretação de código
1.  a. undefined
    b. null
    c. 11
    d. 0
    e. Erro
    f. Erro

2. SUBI NUM ÔNIBUS EM MIRROCOS 27
*/


//Exercícios de escrita de código
//1.
    let emailDoUsuario = prompt("Digite seu e-mail:")
    let nomeDoUsuario = prompt("Digite seu nome:")

    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2. a)
    let comidas = ['Rizzotto', 'Pizza', 'Hambúrguer', 'Pão de queijo', 'Batata frita']

    console.log(comidas)
    
//    b) 
    let comidas = ['Rizzotto', 'Pizza', 'Hambúrguer', 'Pão de queijo', 'Batata frita']
    
    console.log("Essas são as minhas comidas preferidas:")
    console.log(comidas[0])
    console.log(comidas[1])
    console.log(comidas[2])
    console.log(comidas[3])
    console.log(comidas[4])

//    C)
    let comidaUser = prompt("Digite sua comida favorita:")
    let comidas = ['Rizzotto', comidaUser, 'Hambúrguer', 'Pão de queijo', 'Batata frita']

    console.log(comidas)

//3.  a) 
    let listaDeTarefas = []
    
//    b) c)
    let primeiraTarefa = prompt("Digite uma tarefa que você realiza no seu dia:")
    let segundaTarefa = prompt("Digite uma segunda tarefa que você realiza no seu dia:")
    let terceiraTarefa = prompt("Digite uma terceira tarefa que você realiza no seu dia:")

    let listaDeTarefas = [primeiraTarefa, segundaTarefa, terceiraTarefa]
    console.log(listaDeTarefas)

//    d) e) f)  
    let indiceEscolha = prompt("Digite 0, 1 ou 2 para escolher uma entre as três tarefas:")
    let indiceRemove = listaDeTarefas.splice(indiceEscolha, 1)

    console.log(listaDeTarefas)


// Desafios
//1.  
    let frase = "Essas são as minhas comidas preferidas"
    let removeEspaco = /\s/
    let fraseArray = frase.split(removeEspaco)

    console.log(fraseArray)

//2. 
    let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    
    console.log(frutas[2], frutas[2].length)