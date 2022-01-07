```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  if (arrayDeNumeros.includes(numeroEscolhido)) {
    let i = 0
    for(let num of arrayDeNumeros){
      if(num === numeroEscolhido)
      i ++
    }
    return `O número ${numeroEscolhido} aparece ${i}x`
  }
  else {
    return "Número não encontrado"
  }
}
```