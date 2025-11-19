import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

let horizontal = document.querySelector('.horizontal');
if(!horizontal) console.log('not found');

gsap.to(horizontal,{
    x:()=> -(horizontal.scrollWidth - window.innerWidth),
    //xPercent: -100,
    ease:'none',
    scrollTrigger:{
        trigger: horizontal,
        start: "top top",
        pin:true,
        scrub:1,
        //end: ()=> '+=' + (horizontal.scrollWidth - window.innerWidth)
        end: ()=> '+=' + (horizontal.offsetWidth)
    }
})

gsap.utils.toArray(".card").forEach(card => {
    gsap.to(card,{
        scale:1.3,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: card,
            containerAnimation: ScrollTrigger.getById('horizontal'),
            start: "center center",
            end: "center center",
            markers: true,
            //toggleActions: "play reverse play reverse"
        }
    })
})