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