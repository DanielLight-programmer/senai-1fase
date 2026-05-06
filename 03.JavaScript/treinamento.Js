let saida = document.getElementById("Resultado")

function capitaoGanso(){
let marujos, comida
    let comidaPorMarujo
    // entradas
    marujos = Number(prompt("Quantidade de marujos: "))
    comida = Number (prompt("Quilos de comida: "))
    // processamentos
    comidaPorMarujo = comida / marujos
    // saídas
    if(marujos >=10 && comidaPorMarujo >=1.5){
        document.getElementById("resultado").innerHTML ="Provisões suficientes. Rumo ao horizonte!"
    }else{
        document.getElementById("resultado").innerHTML = "Algo está errado. Poseidom não quer ninguém no mar hoje "
    }
}
function recrutamentoMarujos() {
    let sabeNadar;
    let idade;
    let temRecomendacao;
    let saida = document.getElementById("recrutamento")
    
    sabeNadar = prompt("o marujo sabe nadar: ")
    idade = Number(prompt("idade do marujo:"))
    temRecomendacao = prompt("tem Recomendação:")
    
    if(sabeNadar == "sim" && idade > 16){
       saida.innerHTML = "aprovado para ir a abordo!";
    }else if (sabeNadar == "sim" && temRecomendacao && idade >=14){
        saida.innerHTML = "aprovação sob recomedação. Monitorar as suas primeiras viagens.";
    }else{
        saida.innerHTML = "Reprovado. Volte quando estiver mais preparado para navegar pelos mares.";
    }
}
function mostrarDiaDaSemana(){
let numero, dia

numero = Number(prompt("digite o numero: "))
if(numero == 1){
    dia ="Domingo" 
}else if (numero == 2){
    dia = "Segunda"
}else if(numero == 3){
    dia = "Terça"
}else if(numero == 4){
    dia = "Quarta"
}else if(numero == 5){
    dia = "Quinta"
}else if(numero == 6){
    dia ="Sexta"
}else if(numero == 7 ){
    dia = "Sábado"
}
document.getElementById("Resultado").innerHTML = dia
}
function sarumanoMaquina(){
    // informacaoes
    let criancasPequenas
    let velocidadeVento

// entradas
criancasPequenas = Number(prompt("Quantas crianças estão no palco?"))
velocidadeVento = Number(prompt("Qual a velocidade do vento no salão?"))

if(criancasPequenas == 0 && velocidadeVento >= 0.5){
    saida.innerHTML = "Fumaça liberada. Que começe o misterio"
}else{
    saida.innerHTML = "Fumaça bloqueada. Aguardar condições ideais."
}
}


    



