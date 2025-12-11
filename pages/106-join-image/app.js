import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const imageToAlign1 = document.querySelector('.imageToAlign1');
const imageToAlign2 = document.querySelector('.imageToAlign2');
const heroSec = document.querySelector('.heroSec');
const nextToHero = document.querySelector('.nextToHero');



ScrollTrigger.create({
    trigger: heroSec,
    start: 'top top',
    end: '+=' + (heroSec.offsetHeight),
    //markers: true,
    //pin: true,
})

gsap.set(imageToAlign1, {
    y: -200,
    opacity: 0,
})
gsap.set(imageToAlign2, {
    y: 200,
    opacity: 0,
})

gsap.to(imageToAlign1, {
    scrollTrigger: {
        trigger: heroSec,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
    },
    ease: 'none',
    keyframes: [
        { y: 0, opacity: 1 },
        { y: 200, opacity: 0 },
    ],
})
gsap.to(imageToAlign2, {
    scrollTrigger: {
        trigger: heroSec,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
    },
    ease: 'none',
    keyframes: [
        { y: 0, opacity: 1 },
        { y: -200, opacity: 0 },
    ],
})



