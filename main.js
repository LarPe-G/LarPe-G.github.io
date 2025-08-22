// Efecto adicional al pasar el mouse sobre el título
const title = document.querySelector('h1');
title.addEventListener('mouseover', () => {
  title.style.textShadow = '0 0 20px rgba(196, 160, 0, 0.8)';
  title.style.transition = 'text-shadow 0.3s ease';
});
title.addEventListener('mouseout', () => {
  title.style.textShadow = '0 0 10px rgba(196, 160, 0, 0.5)';
});

// Efecto de tarjetas al hacer hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const img = card.querySelector('.card-front img');
  const title = card.querySelector('.card-front h3');
  
  card.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    title.style.color = '#fff';
    title.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.7)';
  });
  
  card.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    title.style.color = '#c4a000';
    title.style.textShadow = '0 0 5px rgba(196, 160, 0, 0.5)';
  });
});
