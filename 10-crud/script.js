// C >> Create >> Cadastrar

// R >> Read >>  Ler 

// U >> Update >> alterar/atualizar/editar/fuçar/mudar 

// D >> Deleta >> Apagar/deletar/excluir 

// let dino = {
// name: "testessauro",
// altura: "2",
// cor: "cinza",
// custo: "14",

// }

// console.log (dino)

const dinos = []

function cadastrarDino() {

    const novoDino = {
        id: Date.now(),
        nome: document.getElementById("input-nome").value,
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value),
    }

    dinos.push(novoDino)
    console.log(dinos)
}

