let  tl = gsap.timeline({scrollTrigger: {
    trigger:".contact",    
    markers: false,
    start: "70% 0%",
    end: "80% 0%",
    scrub: 1,
    duration: 2,
}});

tl.to(".main",{
    backgroundColor: "#fff"
})