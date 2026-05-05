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