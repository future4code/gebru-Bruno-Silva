/*Exercícios de interpretação de código
1. a) Vai mostrar no console cada array, com sua posição index e repetir o array original.

2. a) Vai retornar um novo array com os três nomes que estão no array original.

3. a) Vai imprimir o array original removendo o objeto que tem Chijo como item.
*/

//Exercícios de escrita de código ------------------------------------------------------------------
//1.
        const pets = [
            { nome: "Lupin", raca: "Salsicha"},
            { nome: "Polly", raca: "Lhasa Apso"},
            { nome: "Madame", raca: "Poodle"},
            { nome: "Quentinho", raca: "Salsicha"},
            { nome: "Fluffy", raca: "Poodle"},
            { nome: "Caramelo", raca: "Vira-lata"},
        ]

//  a)
        const nomeDogs = pets.map((item, index, array) => {
            return item.nome
        })
        console.log(nomeDogs)

//  b)
        const dogsSalsichas = pets.filter((item, index, array) => {
            return item.raca === "Salsicha"
        })        
        console.log(dogsSalsichas)

//  c)
        const mensagemClientes = pets.filter((item, index, array) => {
            return item.raca === "Poodle"
        })        

        const mensagemClientesNome = mensagemClientes.map((item) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
        })

        console.log(mensagemClientesNome)

//2.
        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]

//  a)
        const nomesProdutos = produtos.map((item) => {
            return item.nome
        })         
        
        console.log(nomesProdutos)

//  b)
        const produtosDesconto = produtos.map((item) => {
            const novoPreco = item.preco - (item * 0,05)
            const objetoPreco = [
                {novoPreco

            }]
            return produtosDesconto
        })
        console.log(produtosDesconto)

//  c) 
        const objetosBebidas = produtos.filter((item) => {
            return item.categoria === "Bebidas"
        })
        console.log(objetosBebidas)

//  d)
        const palavraYpe = produtos.filter((item) => {
            return item.nome.includes("Ypê", 0)
        })
        console.log(palavraYpe)

//  e)
        const fraseYpe = palavraYpe.map((item) => {
            return `Compre ${item.nome} por ${item.preco}`
        })
        console.log(fraseYpe)