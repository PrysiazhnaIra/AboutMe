// ====================butterfly================

const butterfly = document.getElementById('butterfly');

setInterval(() => {
  butterfly.style.top = `${Math.random() * window.innerHeight}px`;
  butterfly.style.left = `${Math.random() * window.innerWidth}px`;
}, 2000);