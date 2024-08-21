// ====================butterfly================

const butterfly = document.getElementById('butterfly');

setInterval(() => {
  butterfly.style.top = `${Math.random() * window.innerHeight}px`;
  butterfly.style.left = `${Math.random() * window.innerWidth}px`;
}, 2000);

// animation
window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.about-item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('slide-in');
    }, index * 200); // Staggered animation
  });
});

// animation type2
// window.addEventListener('DOMContentLoaded', () => {
//   const items = document.querySelectorAll('.about-item');
//   items.forEach((item, index) => {
//     setTimeout(() => {
//       item.classList.add('fade-in');
//     }, index * 200); // Staggered animation
//   });
// });
