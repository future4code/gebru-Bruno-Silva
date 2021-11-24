/*Exercícios de interpretação de código
1.  a)  10
        50
    b)  Ele vai mostrar apenas a última função chamada.

2.  a) Essa função retorna se o texto digitado no prompt tem a palavra "cenoura", ignorando se foi digitado com letras maiúsculas ou minúsculas.
    b)  i. true
        ii. true
        iii. false
*/
//Exercícios de escrita de código
//1. a)
        const sobreMim = "Eu sou Bruno, tenho 26 anos, moro em São Paulo e sou estudante."

        function sobre() {
            return sobreMim
        }
        console.log(sobre())
//   b)
        function infos(nome, idade, endereco, profissao) {
        
        nome = "Laís"
        idade = 23
        endereco = "São Paulo"
        profissao = "instrutora"

            return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`
        }
        
        console.log(infos())


//2. a) 
        function somaNumeros(num1, num2) {
            return num1 + num2
        }
        console.log(somaNumeros(5, 10))

//   b)
        function maiorQue(num1, num2) {
            return num1 >= num2
        }
        console.log(maiorQue(10, 20))

//   c)
        function numeroPar(numero) {
            return numero % 2 === 0
        }  
        console.log(numeroPar(5))

//   d)
        function frase(mensagem) {
            return mensagem
        }

        console.log(frase("Olá, boa noite!").length, frase("Olá, boa noite!").toUpperCase())
        

//3.    
        let primNumero = prompt("Digite um número:")
        let segNumero = prompt("Digite outro número:")
                    
        function operacoesMatematicas1(soma) {
            return Number(primNumero) + Number(segNumero)
        }

        function operacoesMatematicas2(subtracao) {
            return primNumero - segNumero
        }

        function operacoesMatematicas3(multiplicacao) {
            return primNumero * segNumero
        }

        function operacoesMatematicas4(divisao) {
            return primNumero / segNumero
        }

        console.log("Números inseridos: ", primNumero, "e", segNumero)
        console.log("Soma:", operacoesMatematicas1(primNumero, segNumero))
        console.log("Diferença:", operacoesMatematicas2(primNumero, segNumero))
        console.log("Multiplicação:", operacoesMatematicas3(primNumero, segNumero))
        console.log("Divisão:", operacoesMatematicas4(primNumero, segNumero))

//Desafios:
//1. a)
        const letraA = (parametro) => {
            console.log(parametro)
        }

//   b)
        const letraB = (parametro1, parametro2) => {
        let somaPar = parametro1 + parametro2     
            
        letraA(somaPar)
        
        }

        letraB(5, 8)

//2. 
        function calculo(a, b) {
            const hip = (a*a)+(b*b)
            const result = Math.sqrt(hip)
            return result
        }
        console.log(calculo(2,5))