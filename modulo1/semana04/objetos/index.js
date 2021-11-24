/*Exercícios de interpretação de código
1.  a)  Matheus Nachtergaele
        3
        {canal: "Globo", horario: "14h"}

2.  a)  nome: "Juca", 
	    idade: 3, 
	    raca: "SRD"

        nome: "Juba", 
	    idade: 3, 
	    raca: "SRD"

        nome: "Jubo", 
	    idade: 3, 
	    raca: "SRD"

    b) Ele copia tudo que tem na variável que é pedida.

3.  a) false
    b) Só aparece o primeiro concole.log pois o segundo tem "altura" que não está atribuido no código então não vai mostrar nada.
*/

//Exercícios de escrita de código ------------------------------------------------------------------
//1. a)     
        let pessoa = {
            nome: "Bruno",
            apelidos: ["Bru", " Bruninho", " Brunão"]
        }

        function pessoaApelido(pessoa) {
            let pessoaDois = {
            ...pessoa 
            }
            console.log(`Eu sou ${pessoaDois.nome}, mas pode me chamar de: ${pessoaDois.apelidos}`)
        }
        
        pessoaApelido(pessoa)

//   b)
        let pessoaB = {
            ...pessoa,
            apelidoNovo: {
            apelidos: ["Brubru", " Brunex", " Brunin"]
            }
        }

        pessoaApelido(pessoaB)

//2. a)
        const pessoa1 = {
            nome: "Rafael",
            idade: 25,
            profissao: "Piloto"
        }
        const pessoa2 = {
            nome: "Júlio",
            idade: 20,
            profissao: "Motorista"
        }

//   b)
        function pessoas(pessoa1, pessoa2) {
            const pessoaUm = {
                ...pessoa1
            }
            const pessoaDois = {
                ...pessoa2
            }
            return [pessoaUm.nome, pessoaUm.nome.length, pessoaUm.idade, pessoaUm.profissao, pessoaUm.profissao.length, 
                pessoaDois.nome, pessoaDois.nome.length, pessoaDois.idade, pessoaDois.profissao, pessoaDois.profissao.length]
        }        

        pessoas(pessoa1, pessoa2)

//3. a)
        let carrinho = []

//   b)
        let fruta1 = {
            nome: "Mamão",
            disponibilidade: true
        }
        let fruta2 = {
            nome: "Banana",
            disponibilidade: true
        }
        let fruta3 = {
            nome: "Melão",
            disponibilidade: true
        }
//   c)
        function frutas(fruta1, fruta2, fruta3) {
            carrinho.push(fruta1, fruta2, fruta3)
        }

        frutas(fruta1, fruta2, fruta3)

//   d)       
        console.log(carrinho)


//Desafios ------------------------------------------------------------------------------------------
//1.    
        function usuario(user) {
            let nome = prompt("Digite seu nome:")
            let idade = prompt("Digite sua idade:")
            let profissao = prompt("Digite sua profissão:")

            let dadosUsuario = {
                nome: nome,
                idade: idade,
                profissao: profissao
            }
            console.log(usuario)

        }
        usuario(user)


//2.
        const primeiroFilme = {
            nome: "Vingança",
            anoDeLancamento: 2017
        }
        const segundoFilme = {
            nome: "Hanna",
            anoDeLancamento: 2011
        }
        function filmes(filme1, filme2) {
            let antesDoSeg = primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento
            let mesmoAno = primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento

            console.log("O primeiro filme foi lançado antes do segundo?", antesDoSeg)
            console.log("O primeiro filme foi lançado no mesmo ano do segundo?", mesmoAno)
        }

        filmes(filme1, filme2)


//3.   
        let carrinho = []

        let fruta1 = {
            nome: "Mamão",
            disponibilidade: true
        }
        let fruta2 = {
            nome: "Banana",
            disponibilidade: true
        }
        let fruta3 = {
            nome: "Melão",
            disponibilidade: true
        }

        function frutas(fruta1, fruta2, fruta3) {
            carrinho.push(fruta1, fruta2, fruta3)
        }

        frutas(fruta1, fruta2, fruta3)

        console.log(carrinho)    
        
        function frutas(fruta1, fruta2, fruta3) {
            
        }

        frutas(fruta1, fruta2, fruta3)