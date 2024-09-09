function sortear(){
  let quantidade = parseInt(document.getElementById('quantidade').value); // criado uma função "sortear" para e declara uma variavel e puxa seu id do input quantidade
  let de = parseInt(document.getElementById('de').value) // declarado variavel do input
  let ate = parseInt(document.getElementById('ate').value); // declarado variavel do input / parseInt é para declarar que sera apenas números dentro do input

    let sorteados = []; // criado a variavel array para criarmos um repetição para podermos chamar mais de um numero, <-- usado para armazenar
  
    for (let i = 0; i < quantidade; i++) { // começa por 0, e a variavel i verifica se o numero é menor que a variavel quantidade e incrementa 1 apos a passagem do loop como se fosse i = i + 1

    }


    
}

function obterNumeroAleatorio(min, max) { // função para gerar um número aleatorio entre o min e o max 
   return Math.floor(Math.random() * (max - min + 1 )) + min; // vai retornar um numero inteiro, que leva em consideração o minimo e o maximo
}