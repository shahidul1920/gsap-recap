import gsap from "gsap";

const button = document.querySelector('.scroll-to-top')
const isFloating = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        button.classList.add('show')
        if (!isFloating) {
            gsap.to(button, {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.out'
            })
            isFloating = true
        }

    } else {
        button.classList.remove('show')
    }

})

button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale:1.2
    })
})
button.addEventListener('mouseleave', () => {
    gsap.to(button, {
        scale:1
    })
})

button.addEventListener('click', () => {
    window.scrollTo(0,0)
})