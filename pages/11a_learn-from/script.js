import gsap from "gsap";

// const cards = ['.card-1', '.card-2', '.card-3']

// cards.forEach((card,i)=>{
//     gsap.from(card,{
//     y: 40,
//     opacity:0,
//     duration:0.8,
//     delay:i*0.5,
//     ease: 'back.inOut'
// })
// })

gsap.from('.card', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.4,
    ease: 'back.inOut'
})