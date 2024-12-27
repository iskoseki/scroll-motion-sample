const MAX_FRAMES = 78;

const image = document.querySelector('img');

let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('resize', () => {
maxScroll = document.documentElement.scrollHeight - window.innerHeight;
});
window.addEventListener('scroll', () =>{
// Posición actual del scroll
const scrollPosition = window.scrollY
// Calcular el porcentaje del scroll
const scrollFraction = scrollPosition / maxScroll;
// ¿Qué frame le toca?
const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1
const id = frame.toString().padStart(3, '0')

image.src = `./assets/frames/ezgif-frame-${id}.png`;

})