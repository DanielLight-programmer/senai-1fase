function calcularprecoBrique(){
    // INFO
    let precoCompra, precoVenda
    // LEITURA
    precoCompra= Number(prompt("preço de compra:"))
    // PROCESSAMENTO
    precoVenda = precoCompra * 3
    // SAÍDAS
    console.log("preço para a venda R$: " + precoVenda.toFixed(2));
alert("preço venda R$" + precoVenda.toFixed(2))
document.getElementById("Resultado").innerHTML = "preço para a venda R$:" + precoVenda.toFixed(2);
}


