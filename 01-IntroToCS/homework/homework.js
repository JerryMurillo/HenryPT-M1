'use strict'

function BinarioADecimal(num) {
  var decimal = 0, i = 0, resto;
    
  while (num != 0) {
    resto = num % 10;
    num = Number.parseInt(num / 10);
    decimal = decimal + resto * Math.pow(2, i);
    ++i;
  }
  return decimal;
}

function DecimalABinario(num) {
  let binario = ''
  while (num > 1) {
    let residuo = num % 2
    binario = `${residuo}${binario}`
    num = (num - residuo) / 2
  }
  binario = `${num}${binario}`
  return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}