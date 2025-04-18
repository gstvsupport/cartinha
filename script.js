const gragas = document.getElementById('gragas');
const carta = document.getElementById('carta');
const gif = document.getElementById('gif-gato');
const animacao = document.getElementById('animacao-caracteres');
const musica = document.getElementById('musica'); // <- adicionando o som

const coracoes = ['❤️', '💕', '💖', '💘', '💞'];

function gerarCorações() {
  setInterval(() => {
    const span = document.createElement('span');
    span.classList.add('caractere');
    span.innerText = coracoes[Math.floor(Math.random() * coracoes.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = Math.random() * 100 + 'vh';
    span.style.color = '#ff69b4';
    animacao.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 3000);
  }, 200);
}

gragas.addEventListener('click', () => {
  document.getElementById('gragas-container').style.display = 'none';
  carta.style.display = 'block';

  setTimeout(() => {
    carta.classList.add('aberta');
  }, 100);

  setTimeout(() => {
    gerarCorações();
    gif.classList.remove('hidden');
    musica.play(); // Toca a música 💕
  }, 1000);
});
