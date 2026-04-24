// infos
let preco, quantidade
let valorTotal
//  leituras
quantidade = Number(prompt("Quantidade: "))
preco = Number(prompt("Preço: R$"))
// proc
valorTotal = quantidade * preco
// saídas
console.log("Valor a receber: R$" + valorTotal.toFixed(2)) 
