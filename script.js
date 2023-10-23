gsap.to("#navbar",{
    backgroundColor:"#000",
    height:"14.5%",
    duration:0.3,
    scrollTrigger:{
        rrigger:"#navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})
gsap.to("#page2",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})