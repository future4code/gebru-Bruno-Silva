// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let alturaRet = prompt("Digite a altura do retângulo:")
let larguraRet = prompt("Digite a largura do retângulo:")
let numAltLar = Number(alturaRet) * Number(larguraRet)

console.log(numAltLar)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Digite o ano atual:")
let anoNasc = prompt("Digite o ano que você nasceu:")
let subt = Number(anoAtual) - Number(anoNasc)

console.log(subt)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")
let email = prompt("Digite seu e-mail:")

console.log("Meu nome é "+nome+", tenho "+idade+" anos, e o meu email é "+email+".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("Digite uma cor favorita:")
let cor2 = prompt("Digite uma segunda cor favorita:")
let cor3 = prompt("Digite uma terceira cor favorita:")
let cores = [cor1, cor2, cor3]

console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array.shift()
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array.push(array[0])  
  array[0] = array[array.length -2]
  array.splice([array.length -2], 1)
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtt = prompt("Digite o ano atual:")
  let anoNascim = prompt("Digite o ano de nascimento:")
  let anoEmiss = prompt("Digite o ano de emissão da carteira:")
  let idade = Number(anoAtt) - Number(anoNascim)
  let anoEmssNum = Number(anoAtt) - Number(anoEmiss)
  
  console.log(idade <= 20 && anoEmssNum >= 5 || idade >= 21 && idade <= 50 && anoEmssNum >= 10 || idade >= 51 && anoEmssNum >= 15)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let div1 = ano % 4
let div2 = ano % 400
let div3 = ano % 100

return div2 === 0 || div1 === 0 && div2 === 0 && div3 === 0 || div1 === 0 && div3 !== 0
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
console.log("Responda sim ou não para as perguntas abaixo.")
let per1 = prompt("Você tem mais de 18 anos?")
let per2 = prompt("Você possui ensino médio completo?")
let per3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

console.log(per1 === "sim" && per2 === "sim" && per3 === "sim")
}