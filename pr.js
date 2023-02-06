var tl = gsap.timeline()

tl.from(".st", {
    stagger: .2,
    duration: 1,
    x: 30,
    opacity: 0,
    ease: "Expo.easeInOut"
})
.from('#main h2', {
    y: 30,
    duration: 1,
    opacity: 0,
    ease: "Expo.easeInOut"
}, '-=.2')
.to('#overlay',{
    width: '100%',
    duration: 2,
    ease: 'Expo.easeInOut'
})
.to('#overlay',{
    width: '0%',
    duration: 1,
    ease: 'Expo.easeInOut'
})

gsap.to('#img', {
    opacity: 1,
    duration: 2,
    delay: 2,
})

gsap.from(".qw", {
    stagger: .2,
    duration: 1,
    x: 30,
    opacity: 0,
    ease: "Expo.easeInOut"
})