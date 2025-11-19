import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

let horizontal = document.querySelector('.horizontal');
if(!horizontal) console.log('not found');

let scrollTween = gsap.to(horizontal,{
    x:()=> -(horizontal.scrollWidth - window.innerWidth),
    //xPercent: -100,
    ease:'none',
    scrollTrigger:{
        id: 'horizontal',
        trigger: horizontal,
        start: "top top",
        pin:true,
        scrub:1,
        end: ()=> '+=' + (horizontal.scrollWidth - window.innerWidth)
        //nd: ()=> '+=' + (horizontal.offsetWidth)
    }
})

gsap.utils.toArray(".card").forEach(card => {
    gsap.to(card,{
        scale:1.1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right center",
            markers: true,
            toggleActions: "play reverse play reverse"
        }
    })
})

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const horizontalSection = document.querySelector('.horizontal');
// const cards = gsap.utils.toArray('.card');


// const scrollTween = gsap.to(horizontalSection, {
  
//   x: () => -(horizontalSection.scrollWidth - window.innerWidth),
//   ease: "none", 
//     scrollTrigger: {
//     trigger: horizontalSection,
//     start: "top top",
//     end: () => "+=" + horizontalSection.offsetWidth,
//     pin: true,
//     scrub: 1,
//     invalidateOnRefresh: true, 
//   }
// });

// cards.forEach((card) => {
//   gsap.to(card, {
//     scale: 1.1, 
//     duration: 0.5, // Adding a slight duration makes the toggle smoother
//     scrollTrigger: {
//       trigger: card,
//       // THIS IS THE FIX: We pass the actual tween variable, not an ID
//       containerAnimation: scrollTween, 
      
//       // Logic: When the *center* of the card hits the *center* of the viewport
//       start: "left center", 
//       end: "right center",
//       toggleActions: "play reverse play reverse",
//       markers: true
//     }
//   });
// });