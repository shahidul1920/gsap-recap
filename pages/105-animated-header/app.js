import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const dynamicLogo = document.querySelector('.dynamicLogo');
const homePage = document.querySelector('.homepage');
const headerSection = document.querySelector('.headerSection');

dynamicLogo.style.fill = "gray"

gsap.set(headerSection, {
    y: 20,
    scaleX: 1.1,
    scaleY: 1.03,
    background: "#fff",
    color: "#000"
})

ScrollTrigger.create({
    trigger: headerSection,
    start: 'top top',
    end: '+=' + (homePage.offsetHeight),
    pin: true,
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        gsap.to(headerSection, {
            scaleX: 1,
            scaleY: 1,
            background: "#000",
            color: "#fff",
            ease: 'power1.out',
            scrollTrigger: {
                trigger: homePage,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                markers: true
            }
        })

    }
})


