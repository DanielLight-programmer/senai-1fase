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


// function crescente(){//1
//   let numero = 1
//   while(numero <= 10){
//     alert(numero)
//     numero ++
//   }
// }



// function decrescente(){//2
//   let numero = 10
//   while(numero >= 1){
//     alert(numero)
//     numero --
    
//   }
// }


// let i=10 //inicialização
// while(i > 1){//cond repet
// console.log(i)
// i--// contagem
// }


// function somaDosNúmeros(){
// let armazenamentoTotal = 0 
// let numero = 1 
// while(numero <= 100){
//     armazenamentoTotal += numero 
//     numero++
// }
//     alert(armazenamentoTotal)
// }

// function calcularaSoma(){
// let soma = 0;
//  for(let i = 1; i<=10; i++){
//   soma += i;
//   console.log(soma);
//  }
// console.log("A soma total é: " + soma);
//  alert("A soma total é: " + soma);
// }

// function tabuadaDo5(){
//   let tabuada = 5;
//   let resultado = 0  
//   for(let i = 1; i <= 10; i++){
//     resultado = tabuada*i
//     alert(tabuada + " x " + i + ' = ' + resultado)
//   }
// }

 
// palavra.lengh
// console.log(palavra[8])
// console.log(palavra.length)

function ExibirCadaletra(){ 

    let palavra = "JavaScript"; 

for(let i = 0; i < palavra.length; i++){

console.log(palavra[i]);
alert(palavra[i]);
}
 
}

function quadradoDosNumeros(){

let resultado = 0

for(let i = 1; i <=10; i++){

resultado = i ** 2

alert(i  + "² = " + resultado);

}
}

function multiplosDeTrês(){

for(let i = 1; i <= 30; i ++){

    if (i % 3 === 0){

    alert(i + " é  multiplo de 3 ." );
}

}

}


