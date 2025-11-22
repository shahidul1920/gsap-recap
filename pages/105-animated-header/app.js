import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const dynamicLogo = document.querySelector('.dynamicLogo');
const homePage = document.querySelector('.homepage');

dynamicLogo.style.fill = "#fff"

ScrollTrigger.create({
    trigger: dynamicLogo,
    start: 'top top',
    end: '+=' + (homePage.offsetHeight),
    pin: true
})

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        gsap.to(homePage,{

            ease: 'none',
            scrollTrigger:{
                trigger: dynamicLogo,
                y:20,
            }
        })
        
    }
})


