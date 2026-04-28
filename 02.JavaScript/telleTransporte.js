// informações
let pesoBalança;
let tara ;
let peso_carga;
// entradas 
pesoBalança = Number(prompt("Digite o peso indicado na balança (Peso Bruto Total):"));
tara = Number(prompt("Digite a tara do caminhão (conforma a plaqueta):"));
// processamento
peso_carga = pesoBalança - tara;
// saída
alert("O peso da carga é R$:" + peso_carga.toFixed(2))
console.log(peso_carga)

 
