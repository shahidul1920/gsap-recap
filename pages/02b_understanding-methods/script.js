import gsap from "gsap";

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const resume = document.querySelector('.resume')
const restart = document.querySelector('.restart')
const reverse = document.querySelector('.reverse')
const repeat = document.querySelector('.repeat')
const kill = document.querySelector('.kill')
const yoyo = document.querySelector('.yoyo')
const box = document.querySelector('.box')

const anime1 = gsap.to(box, {
    opacity:1,
    rotation:360,
    borderRadius: '50%',
    duration:5
})

play.addEventListener("click", ()=>{
    anime1.play()
})
pause.addEventListener("click", ()=>{
    anime1.pause()
})
resume.addEventListener("click", ()=>{
    anime1.resume()
})
restart.addEventListener("click", ()=>{
    anime1.restart()
})
reverse.addEventListener("click", ()=>{
    anime1.reverse()
})
kill.addEventListener("click", ()=>{
    anime1.kill()
})
yoyo.addEventListener("click", ()=>{
    anime1.yoyo()
})
repeat.addEventListener("click", ()=>{
    anime1.repeat(2)
})