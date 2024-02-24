let tl = gsap.timeline()

tl.from(".nav h1",{
    y: -20,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    ease: "power2.out"
})

tl.from(".list ul li",{
    y: -20,
    opacity: 0,
    delay:0.2,
    duration: 0.5,
    stagger: 0.2, 
    ease: "power2.out"
})

tl.from(".page1 img, .page1 p, .page2 video, .page4 img",{
    y: 30,
    opacity: 0,
    duration: 1,
    delay:0.5,
    ease: "power2.out",
    stagger: 0.2
})

tl.to(".page3 h1",{
    transform: "translateX(-184%)",
    fontWeight: "200",
    scrollTrigger:{
        trigger: ".page3",
        scroller: "body",
        start: "top 0%",
        end: "top -300%",
        scrub: 1,
        pin: true,
    }
})
