let saida = document.getElementById("Resultado")

function capitaoGanso() {
    let marujos, comida
    let comidaPorMarujo
    // entradas
    marujos = Number(prompt("Quantidade de marujos: "))
    comida = Number(prompt("Quilos de comida: "))
    // processamentos
    comidaPorMarujo = comida / marujos
    // saídas
    if (marujos >= 10 && comidaPorMarujo >= 1.5) {
        document.getElementById("resultado").innerHTML = "Provisões suficientes. Rumo ao horizonte!"
    } else {
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

    if (sabeNadar == "sim" && idade > 16) {
        saida.innerHTML = "aprovado para ir a abordo!";
    } else if (sabeNadar == "sim" && temRecomendacao && idade >= 14) {
        saida.innerHTML = "aprovação sob recomedação. Monitorar as suas primeiras viagens.";
    } else {
        saida.innerHTML = "Reprovado. Volte quando estiver mais preparado para navegar pelos mares.";
    }
}
function mostrarDiaDaSemana() {
    let numero, dia

    numero = Number(prompt("digite o numero: "))
    if (numero == 1) {
        dia = "Domingo"
    } else if (numero == 2) {
        dia = "Segunda"
    } else if (numero == 3) {
        dia = "Terça"
    } else if (numero == 4) {
        dia = "Quarta"
    } else if (numero == 5) {
        dia = "Quinta"
    } else if (numero == 6) {
        dia = "Sexta"
    } else if (numero == 7) {
        dia = "Sábado"
    }
    document.getElementById("Resultado").innerHTML = dia
}
function sarumanoMaquina() {
    // informacaoes
    let criancasPequenas
    let velocidadeVento

    // entradas
    criancasPequenas = Number(prompt("Quantas crianças estão no palco?"))
    velocidadeVento = Number(prompt("Qual a velocidade do vento no salão?"))

    if (criancasPequenas == 0 && velocidadeVento >= 0.5) {
        saida.innerHTML = "Fumaça liberada. Que começe o misterio"
    } else {
        saida.innerHTML = "Fumaça bloqueada. Aguardar condições ideais."
    }

}
function verificarMeta() {
    // info
    let totalBruto, premiacoes, presentes, comissoes, lucro
    let meta
    // entradas
    totalBruto = Number(prompt("Total bruto: "))
    premiacoes = Number(prompt("premiações: "))
    presentes = Number(prompt("presentinhos: "))
    comissoes = Number(prompt("comissões: "))
    meta = Number(prompt("Meta:"))
    // processamento
    lucro = totalBruto - premiacoes - presentes - comissoes
    let menssagem = ""
    if (lucro >= meta) {
        // bateu a meta
        menssagem = "Batemos a meta, lucro de R$" + lucro
    }else if(lucro > 0){
        // sem meta, mas com lucro
            menssagem = "não batemos a meta, mas tivemos lucro de R$" + lucro.toFixed(2).replace(".",",")
    }else{
        //  sem meta e prejuizo
        let prejuizo = lucro * 1
        menssagem = "não batemos a meta, e ainda tivemos prejuizo R$" + lucro
        prejuizo.toFixed(2).replace(".", ",")
    }
    // saídas
    saida.innerHTML = "lucro de hoje: R$" + lucro.toFixed(2).replace(".", ",") + "<br>" + menssagem

}
function sarumanoAdoecido(){
    let estaGripado;
    let tempoViagem;
estaGripado = prompt ("O sarumano está gripado?")
tempoViagem = Number(prompt(" Qual o tempo da viagem?")) 
 
if(estaGripado == "sim" && tempoViagem < 45 ){
    saida.innerHTML = "viagem autorizada. Rumo ao show!"
}else{ 
    saida.innerHTML = "Deslocamento inviável. Melhor recusar este evento."

}

   

}
function calcularUber(){

    let distancia, tempoSegundos, minutos, horas, dias, meses, anos 
    const velocidade = 300000

    distancia = Number(prompt("Qual a distancia?"))
    tempoSegundos = distancia / velocidade
    saida.innerHTML = "tempo será: " + tempoSegundos + "Segundos"

    
    if(tempoSegundos > 60 ){
        minutos = tempoSegundos / 60
        saida.innerHTML = "tempo será: " + minutos + "minutos"
    } 
    if(minutos > 60){
         horas = minutos / 60
        saida.innerHTML = "tempo será: " + horas + "horas"  

    }if(horas > 24){
        dias = horas / 24
        saida.innerHTML = "tempo será:" + dias + "dias"


    }if( dias > 30 ){
        meses = dias / 30
        saida.innerHTML = "tempo será: " + meses + "meses"

    }if( meses > 12 ){
        anos = meses / 12 
        saida.innerHTML = "tempo será: " + anos + "anos"

    }

        
}
function entradaDoPalco(){
let somFuncionado;
let figurinoCompleto

}