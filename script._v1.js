// Confeti animado continuo
const confetiContainer = document.getElementById('confeti');
const colors = ['#ff69b4', '#dda0dd', '#ffffff', '#d8bfd8'];

function crearConfeti() {
  const confeti = document.createElement('div');
  confeti.style.position = 'absolute';
  confeti.style.width = '10px';
  confeti.style.height = '10px';
  confeti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confeti.style.top = '-10px';
  confeti.style.left = `${Math.random() * 100}%`;  // Corregido: Sintaxis de template string
  confeti.style.opacity = Math.random();
  confeti.style.transform = `rotate(${Math.random() * 360}deg)`;  // Corregido: Template string
  confeti.style.animation = `caer ${Math.random() * 3 + 2}s linear forwards`; // Corregido: Sintaxis de template string
  confetiContainer.appendChild(confeti);
  setTimeout(() => confeti.remove(), 5000);
}

setInterval(crearConfeti, 200);

// Estilos de animación para el confeti
const style = document.createElement('style');
style.innerHTML = `
  @keyframes caer {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
