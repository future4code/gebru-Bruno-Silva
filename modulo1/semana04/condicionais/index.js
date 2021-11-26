/*Exercícios de interpretação de código
1.      a) Se o número é divisível por 2.
        b) Números pares.
        c) Números ímpares.

2.      a) Pra saber quanto custa cada fruta.
        b) O preço da fruta Maçã é R$ 2.25
        c) O preço da fruta Pêra é R$ 5

3.      a) Está pegando a string digitada no prompt e transformando em number.
        b) Para 10: Esse número passou no teste
           Para -10 não vai aparecer nada pois não foi colocada nenhuma condição para número menor que 0.
        c) No console.log(mensagem) pois ele está fora do escopo onde se encontra a variável mensagem.
*/

//Exercícios de escrita de código ---------------------------------------------------------------------
//1. a) b) c)
        const idadeUsuario = Number(prompt("Digite sua idade:"))

        if (idadeUsuario >= 18) {
                console.log("Você pode dirigir")
        }
        else if(idadeUsuario < 18) {
                console.log("Você não pode dirigir")
        }

//2. 
        console.log("Digite M para matutino, V para vespertino ou N para noturno.")
        const perguntaTurno = prompt("Qual turno você estuda?")

        if (perguntaTurno === "M") {
                console.log("Bom Dia!")
        }
        else if (perguntaTurno === "V") {
                console.log("Boa Tarde!")
        }
        else if (perguntaTurno === "N") {
                console.log("Boa Noite!")
        }
        else {
                console.log("O turno não foi definido.")
        }

//3.
        console.log("Digite M para matutino, V para vespertino ou N para noturno.")
        const perguntaTurno = prompt("Qual turno você estuda?")

        switch (perguntaTurno) {
                case "M":
                        console.log("Bom Dia!")
                        break
                
                case "V":
                        console.log("Boa Tarde!")
                        break   
                
                case "N":
                        console.log("Boa Noite!")
                        break
                
                default:
                        console.log("O turno não foi definido.")
                        break
                }

//4.
        const perguntaFilme = prompt("Qual o gênero do filme que irão assistir?")
        const perguntaPreco = Number(prompt("Qual o valor do ingresso?"))

        if (perguntaFilme === "fantasia" && perguntaPreco < 15) {
                console.log("Bom filme!")
        }
        else {
                console.log("Escolha outro filme :(")
        }

//Desafios --------------------------------------------------------------------------------
//1. 
        const perguntaFilme = prompt("Qual o gênero do filme que irão assistir?")
        const perguntaPreco = Number(prompt("Qual o valor do ingresso?"))

        if (perguntaFilme === "fantasia" && perguntaPreco < 15) {
                const lanchinho = prompt("Qual lanchinho você vai comprar?")
                console.log(`Bom filme! Aproveite o seu ${lanchinho}!`)
        }
        else {
                console.log("Escolha outro filme :(")
        }

//2.
        const nomeCompleto = prompt("Digite seu nome completo:")
        const tipoDeJogo = prompt("Qual o tipo de jogo? Digite: IN para internacional e DO para doméstico.")
        const etapaDoJogo = prompt("Qual a etapa do jogo? Digite: SF para semi-final, DT para decisão de 3° lugar e FI para final.")
        const categorias = Number(prompt("Qual a categoria do jogo? Digite: 1, 2, 3 ou 4."))
        const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"))

        if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categorias === 1) { //SF -----
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 1")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 1320")
                console.log("Valor total: R$", 1320 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categorias === 2) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 2")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 880")
                console.log("Valor total: R$", 880 * quantidadeIngressos) 
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categorias === 3) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 3")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 550")
                console.log("Valor total: R$", 550 * quantidadeIngressos) 
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categorias === 4) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 4")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 220")
                console.log("Valor total: R$", 220 * quantidadeIngressos) 
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categorias === 1) { //DT -----
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 1")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 660")
                console.log("Valor total: R$", 660 * quantidadeIngressos) 
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categorias === 2) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 2")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 440")
                console.log("Valor total: R$", 440 * quantidadeIngressos) 
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categorias === 3) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 3")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 330")
                console.log("Valor total: R$", 330 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categorias === 4) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 4")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 170")
                console.log("Valor total: R$", 170 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categorias === 1) { //FI -----
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 1")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 1980")
                console.log("Valor total: R$", 1980 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categorias === 2) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 2")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 1320")
                console.log("Valor total: R$", 1320 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categorias === 3) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 3")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 880")
                console.log("Valor total: R$", 880 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categorias === 4) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Nacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 4")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: R$ 330")
                console.log("Valor total: R$", 330 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categorias === 1) { //IN SF-----
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 1")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 1320 / 4.10 )
                console.log("Valor total: U$", 1320 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categorias === 2) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 2")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 880 / 4.10 )
                console.log("Valor total: U$", 880 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categorias === 3) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 3")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 550 / 4.10 )
                console.log("Valor total: U$", 550 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categorias === 4) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Semi-final")
                console.log("Categoria: 4")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 220 / 4.10 )
                console.log("Valor total: U$", 220 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categorias === 1) { //IN DT -----
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 1")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 660 / 4.10 )
                console.log("Valor total: U$", 660 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categorias === 2) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 2")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 440 / 4.10 )
                console.log("Valor total: U$", 440 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categorias === 3) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 3")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 330 / 4.10 )
                console.log("Valor total: U$", 330 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categorias === 4) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Decisão do 3° lugar")
                console.log("Categoria: 4")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 170 / 4.10 )
                console.log("Valor total: U$", 170 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categorias === 1) { //IN FI -----
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 1")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 1980 / 4.10 )
                console.log("Valor total: U$", 1980 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categorias === 2) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 2")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 1320 / 4.10 )
                console.log("Valor total: U$", 1320 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categorias === 3) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 3")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 880 / 4.10 )
                console.log("Valor total: U$", 880 / 4.10 * quantidadeIngressos)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categorias === 4) {
                console.log("---Dados da compra---")
                console.log("Nome do cliente:", nomeCompleto)
                console.log("Tipo de jogo: Internacional")
                console.log("Etapa do jogo: Final")
                console.log("Categoria: 4")
                console.log("Quantidade de Ingressos:", quantidadeIngressos)
                console.log("---Valores---")
                console.log("Valor do ingresso: U$", 330 / 4.10 )
                console.log("Valor total: U$", 330 / 4.10 * quantidadeIngressos)
        }
        else {
                console.log("Não definido pelo usuário")
        }