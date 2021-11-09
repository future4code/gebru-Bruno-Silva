/* Exercícios de interpretação de código
1. 10
     10, 5

2. 10, 10, 10

3. let horasTrabalhadas
   let salarioDia 
*/

// Exercícios de escrita de código
//1. a) b) c) e d) Erro de sintaxe já que não foi atribuído valor e ele não consegue ler o código.
let nome =
let idade =

console.log(typeof nome)
console.log(typeof idade)
//e) e f) Ele imprime o tipo string, que é a informação do prompt.
let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade? ")

console.log(typeof nome);
console.log(typeof idade);
//g)
let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade? ")

console.log("Olá",nome,", você tem",idade,"anos!");



//2. 
let pergunta1 = "Está chovendo hoje?"
let pergunta2 = "Hoje é Segunda-feira?"
let pergunta3 = "Está de noite?"

let resp1 = "Não"
let resp2 = "Não"
let resp3 = "Sim"

console.log(pergunta1,"=",resp1)
console.log(pergunta2,"=",resp2)
console.log(pergunta3,"=",resp3)



//3. 
let a = 10
let b = 25
c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)



//Desafios:
let num1 = prompt("Digite um número:")
let num2 = prompt("Digite outro número:")

console.log("O primeiro número somado ao segundo número resulta em: ", parseInt(num1) + parseInt(num2))
console.log("O primeiro número multiplicado pelo segundo número resulta em: ", num1*num2)