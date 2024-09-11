function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value); // capturar a quantidade de números a serem sorteados
  let de = parseInt(document.getElementById('de').value); // capturar o valor mínimo do intervalo
  let ate = parseInt(document.getElementById('ate').value); // capturar o valor máximo do intervalo

  let sorteados = []; // array para armazenar os números sorteados
  let numero;

  for (let i = 0; i < quantidade; i++) {  // sorteia 'quantidade' números
    let numero = obterNumeroAleatorio(de, ate); // obtem um número aleatório entre 'de' e 'ate'
    
    while (sorteados.includes(numero)) { // garantir que o número não se repita
      numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado'); // exibir os números sorteados na tela
  resultado.classList.add('texto__paragrafo'); 
  resultado.textContent = `Números sorteados: ${sorteados.join(', ')}`;

  habilitarBotaoReiniciar(); // após o sorteio, habilita o botão de reiniciar
}

function obterNumeroAleatorio(min, max) { 
   return Math.floor(Math.random() * (max - min + 1)) + min; // gera um número aleatório entre min e max
}

function habilitarBotaoReiniciar() {
  let botao = document.getElementById('btn-reiniciar');
  botao.classList.remove('container__botao-desabilitado');
  botao.classList.add('container__botao');
}

function desabilitarBotaoReiniciar() {
  let botao = document.getElementById('btn-reiniciar');
  botao.classList.remove('container__botao');
  botao.classList.add('container__botao-desabilitado');
}

function reiniciar() { // limpa os campos e reseta o resultado
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').textContent = 'Números sorteados: Nenhum até agora';

  desabilitarBotaoReiniciar(); // desabilita o botão de reiniciar após limpar
}
