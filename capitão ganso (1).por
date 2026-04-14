programa {
  funcao inicio() {
    inteiro numeroDeMarujos 
    real quantidadeDeComida 
    escreva("Quantos Marujos tem?")
    leia(numeroDeMarujos)
    escreva("Quantos kilos de comida?")
    leia(quantidadeDeComida)
    se(quantidadeDeComida/numeroDeMarujos >= 1.5){
      escreva("Provisões suficientes. Rumo ao horizonte!")
    }senao{
      escreva("Algo está errado. Posseidom não quer ninguém no mar hoje.")

    }

  }
}
