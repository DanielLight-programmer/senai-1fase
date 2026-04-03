programa {
  funcao inicio() {
  // criar as variaveis 
  // ler as entradas
  // processar
  // mostrar resultados

  inteiro tamanhoDoprompt
  inteiro totalTokens
  real custoPortoken = 0.151, totalReais
  escreva(" Tamanho do prompt: ")
  leia( tamanhoDoprompt)
  totalTokens = tamanhoDoprompt + 5
  totalReais  = totalTokens * custoPortoken
  escreva("total de tokens" + totalTokens)
  escreva( "\nValor:  R$" + totalReais)

  }
}
