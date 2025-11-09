import gsap from "gsap";

const showToastLoop = ()=>{
    gsap.to('.toast',{
        y: -20,
        opacity:1,
        scale: 1,
        duration:0.6,
        ease: 'power1.in',
        onComplete:()=>{
            gsap.to('.toast', {
                delay:1.8,
                y:0,
                opacity:0,
                scale: 0.6,
                duration: 0.5,
                onComplete: ()=>{
                    setTimeout(showToastLoop, 1500)
                }
            })
        }
    })
}

showToastLoop()