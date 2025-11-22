import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const dynamicLogo = document.querySelector('.dynamicLogo');
const homePage = document.querySelector('.homepage');

dynamicLogo.style.fill = "#000"

ScrollTrigger.create({
    trigger: dynamicLogo,
    start: 'top top',
    end: '+=' + (homePage.offsetHeight),
    pin: true
})

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        gsap.to(dynamicLogo,{
            y:20,
            x:20,
            scale: 0.7,
            fill: '#fff',
            ease: 'power1.out',
            duration: 1,
            scrollTrigger:{
                trigger: homePage,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        })
        
    }
})


