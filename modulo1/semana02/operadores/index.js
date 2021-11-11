/*Exercícios de interpretação de código 
1.  a. false
    b. false
    c. true
    d. boolean

2. Usou o sinal de + de forma errada, fazendo com que o código concatene.
   No console será impresso os números digitados, juntos, formando um número só.

3. Ele deve transformar o que foi digitado em números, usando o Number().

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma)
*/

//Exercícios de escrita de código
//1.
    const idadeUser = prompt("Qual a sua idade?")
    const idadeAmigo = prompt("Qual a idade do seu melhor amigo(a)?")
    const idades = Number(idadeUser) > Number(idadeAmigo)

    console.log("Sua idade é maior do que a do seu melhor amigo?",idades)
    
    const diferenca = Number(idadeUser) - Number(idadeAmigo)
    console.log("A diferença de idade entre vocês é de "+diferenca+" ano(s)!")


//2.
    let digNumPar = prompt("Digite um número par:")
    let numPar = Number(digNumPar)

    console.log(numPar % 2) //c) Todos os números pares divididos por 2 dá resto 0.
                            //d) Todos os números ímpares dá como resultado resto 1.

//3.
    let pergIdade = prompt("Quantos anos você tem?")
    let numIdade = Number(pergIdade)

    console.log("Sua idade em meses é: "+numIdade * 12+" meses")
    console.log("Sua idade em dias é: "+numIdade * 365+" dias")
    console.log("Sua idade em horas é: "+numIdade * 24 * 365+" horas")

//4.
    const num1 = prompt("Digite um número:")
    const num2 = prompt("Digite outro número:")

    const num3 = Number(num1)
    const num4 = Number(num2)

    console.log("O primeiro numero é maior que segundo?",num3 > num4)
    console.log("O primeiro numero é igual ao segundo?",num3 === num4)
    console.log("O primeiro numero é divisível pelo segundo?",num3 % num4 === 0)
    console.log("O segundo numero é divisível pelo primeiro?",num4 % num3 === 0)


//Desafios:
//1. a)
        console.log("77°F =",(77-32)*(5/9) + 273.15,"K")
//   b)
        console.log("80°C =",(80)*(9/5)+32,"°F")
//   c)
        console.log("30°C =",(30)*(9/5)+32,"°F"," e ",30 + 273.15,"K")
//   d)
        let graus = prompt("Digte os Graus Celsius(°C):")
        let numGraus = Number(graus)

        console.log(graus,"°C = ",(numGraus)*(9/5)+32,"°F"," e ",numGraus + 273.15,"K")

//2. a)
        console.log("Por 280 kW, você irá pagar ",280*0.05,"R$")
//   b)
        let quilo = 280
        let preco = 0.05
        let desc = 0.15
        let mult = quilo*preco
        let result = quilo*preco*desc

        console.log("Com 15% de desconto, você pagará = ",mult-result,"R$")

//3. a)
        console.log("20lb equivalem a "+20/2.205+"Kg")
//   b)
        console.log("10.5oz equivalem a "+10.5/35.274+"Kg")
//   c)
        console.log("100mi equivalem a "+100/0.00062137+"m")
//   d)
        console.log("50ft equivalem a "+50/3.281+"m")
//   e)
        console.log("103.56gal equivalem a "+103.56/0.26417+"l")
//   f)
        console.log("450 xic equivalem a "+450*0.24+" l")
//   g)
        let xicaras = prompt("Digite a quantidade em xic:")
        let numXic = Number(xicaras)

        console.log(xicaras+" xic equivalem a "+xicaras*0.24+" l")