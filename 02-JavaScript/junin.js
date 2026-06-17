// infos 
let salario, dias, salariosDiario
// entradas
salario = Number(prompt("salario:"))
dias = Number(prompt("Dias trabalhados"))
// procecessar informações
salariosDiario = salario / dias
 alert("Salário diário: R$" + salariosDiario.toFixed(2))