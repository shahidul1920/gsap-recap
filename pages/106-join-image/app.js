import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const textToAlign1 = document.querySelector('.textToAlign1');
const textToAlign2 = document.querySelector('.textToAlign2');
const heroSec = document.querySelector('.heroSec');



ScrollTrigger.create({
    trigger: heroSec,
    start: 'top top',
    end: '+=' + (heroSec.offsetHeight),
    //pin: true,
})

gsap.from(textToAlign1, {
    scrollTrigger: {
        trigger: heroSec,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
    y: -200,
    opacity: 0,
    duration: 2,
})
gsap.from(textToAlign2, {
    scrollTrigger: {
        trigger: heroSec,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
    y: 200,
    opacity: 0,
    duration: 2,
})
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 5) {
//         gsap.to(headerSection, {
//             scaleX: 1,
//             scaleY: 1,
//             background: "#000",
//             color: "#fff",
//             ease: 'power1.out',
//             scrollTrigger: {
//                 trigger: homePage,
//                 start: 'top top',
//                 end: 'bottom bottom',
//                 scrub: true,
//                 markers: true
//             }
//         })

//     }
// })


