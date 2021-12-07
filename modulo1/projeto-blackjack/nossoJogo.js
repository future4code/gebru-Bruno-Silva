/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")
    confirm("Quer iniciar uma nova rodada?")

      const cartaUsuario1 = comprarCarta()
      const cartaUsuario2 = comprarCarta()
      const cartaComputador1 = comprarCarta()
      const cartaComputador2 = comprarCarta()
      
      const somaCartaUsuario = Number(cartaUsuario1.valor) + Number(cartaUsuario2.valor)
      const somaCartaComputador = Number(cartaComputador1.valor) + Number(cartaComputador2.valor)
      
      console.log("Usuário - ", cartaUsuario1.texto, cartaUsuario2.texto, "-", somaCartaUsuario)
      console.log("Computador - ", cartaComputador1.texto, cartaComputador2.texto, "-", somaCartaComputador)

   if (somaCartaUsuario > somaCartaComputador && somaCartaUsuario <= 21) {
      console.log("O usuário ganhou!")
   }
   else if (somaCartaComputador > somaCartaUsuario && somaCartaComputador <= 21) {
      console.log("O computador ganhou!")
   }
   else if (somaCartaComputador === somaCartaUsuario) {
      console.log("Empate!")
   }
   else {
      console.log("O jogo acabou")
   }