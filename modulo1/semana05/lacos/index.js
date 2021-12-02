/*Exercícios de interpretação de código
1. Está declarando o valor de i = 0, e da variável "valor" também = 0, e dizendo que 
   enquanto ele for menor que 5 ele será true e será somado + 1. Dando como resultado
   de "valor" a soma de i + i.
   No console aparecerá o valor: 10

2. a)   19
        21
        23
        25
        27
        30
   b) Sim, usar o indexOf()

3. 

*/
//Exercícios de escrita de código -------------------------------------------------------------
//1. a) b) c)
        let array = []
                
        let quantidadeBichos = Number(prompt("Qual a quantidade de bichinhos você tem?"))

        if (quantidadeBichos === 0) {
                console.log("Que pena! Você pode adotar um pet!")
        }
        for (let bichos = 1; bichos <= quantidadeBichos; bichos++) {
                let nomeBichos = prompt("Digite o nome do seu bicho:")
                
                array.push(nomeBichos)
        }

        console.log(array)
        
//2. 
        let arrayOriginal = [10, 15, 20, 30, 50, 100]

//   a)
        for (let i = 0; i < 6; i++) {
                const elemento = arrayOriginal[i]
                console.log(elemento)
        }
//   b)
        for (let i = 0; i < 6; i++) {
                const elemento = arrayOriginal[i] / 10
                console.log(elemento)
        }
//   c)
        function numerosPares(array) {
                for (let i = 0; i < array.length; i++) {
                        if (array[i] % 2 === 0) {
                                arrayDois.push(array[i])               
                }
                }
                return arrayDois
        }

        console.log(numerosPares(arrayDois))

//   d)

//   e)
