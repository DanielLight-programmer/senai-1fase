// let contador = 0 
// while(contador < 10){
//     alert("Contador: " + contador )
    
//     contador++
// }//voltar e testar novamente

// let peso

// let contador = 0 
// while(contador < 10)
// peso = Number(prompt("digite o peso:"))
// if(peso>1.1 || peso<0.9){
//     alert("Fora tolerância do peso")
// }
// contador++

// let total = 0

// let i = 0 //inicialização
// while(i < 3){//cond repet
//     i++ //contagem
//     let preco = Number(prompt("Digite o preço do " + i + "° produto: "))
//     total = total + preco
//     document.getElementById('total').innerHTML += i + "° produto R$" + preco.toFixed(2) + "<br>" 
// }


function crescente(){//1
  let numero = 1
  while(numero <= 10){
    alert(numero)
    numero ++
  }
}



function decrescente(){//2
  let numero = 10
  while(numero >= 1){
    alert(numero)
    numero --
    
  }
}

/*
let i=10 //inicialização
while(i > 1){//cond repet
console.log(i)
i--// contagem
}
*/

function somaDosNúmeros(){
let armazenamentoTotal = 0 //3
let numero = 1 
while(numero <= 100){
    armazenamentoTotal += numero 
    numero++
}
    alert(armazenamentoTotal)
}
 
