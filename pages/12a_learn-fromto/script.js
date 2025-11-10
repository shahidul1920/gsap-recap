import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, i)=>{
    gsap.fromTo(bar,{
        scaleY:0.4,
        //delay:i*0.2
    },{
        scaleY:1,
        delay:i*0.1,
        ease:'sine.inOut',
        yoyo:true,
        duration:0.3,
        repeat:-1
    })

})