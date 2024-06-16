import { gsap } from 'gsap';

let marquee1 = document.querySelector('#marquee1 .skill-list');
let marquee2 = document.querySelector('#marquee2 .skill-list');

gsap.to(marquee1, {
    x: '-50%',
    repeat: -1,
    ease: 'none',
    duration: 14
});

gsap.to(marquee2, {
    x: '-50%',
    repeat: -1,
    ease: 'none',
    duration: 14
});