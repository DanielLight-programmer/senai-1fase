let cont = 0
function incrementarContagem(){
cont = cont + 1 
document.getElementById(`p-contagem`).innerHTML = cont
}






let global = " Eu sou uma variável global :/"
function funcao1(){ 
let local = "Sou uma varíavel local :D"
console.log(local);
console.log(global);
}
function funcao2(){
    console.log(global);
    // console.log(local);

}

funcao1()
funcao1()

let total = 0
function registrarVenda(){
    let valor = Number(document.getElementById("inputVenda").value)
    // registrar venda no total
    total = valor + valor
    // lista de vendas
    document.getElementById("listaVendas").innerHTML += "R$" + valor.toFixed(2)
    "<br>"
    
    document.getElementById("listVendas").innerHTML += "R$" + valor.toFixed(2)
    + "<br>"
    document.getElementById("inputVenda").focus()

}