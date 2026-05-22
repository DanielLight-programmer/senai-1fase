let Totalpontos = 0;
let historico = [];
const contadoresDados = {
    4: 0, 6: 0, 8: 0, 10: 0, 12: 0, 20: 0
}


function RolarDado(lados){
    const resultado = Math.floor(Math.random() * lados) + 1;

    Totalpontos =+ resultado;

    contadoresDados[lados]++;

    const timestamp = new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        segund: '2-digit'
    })
    
    historico.unshift('[${timestamp}] Dado D${lados}  tirou: <strong>${resultado}</strong>')

    renderizarTela(resultado, lados);

}

function renderizarTela(ultimoResultado = null, ladosDado = null){
    document.getElementById('totalPontos').innerText = Totalpontos;
    
    for( cont dado in contadoresDados)
} 