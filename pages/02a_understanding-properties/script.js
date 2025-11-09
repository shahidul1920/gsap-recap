import gsap from "gsap";

let box = document.querySelector('.box');

gsap.to(box,{
    opacity:1,
    rotation: 360,
    background: '#ff6f6f',
    scale: 1.3,
    duration: 3,
    ease: 'bounce',
    yoyo: true,
    borderRadius: '50%'
})