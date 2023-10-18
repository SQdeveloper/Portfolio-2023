let  tl = gsap.timeline({scrollTrigger: {
    trigger:".home",    
    markers: false,
    start: "70% 0%",
    end: "80% 0%",
    scrub: 1,
    duration: 1,
}});

// let  til = gsap.timeline({scrollTrigger: {
//     trigger:".contentTitleProyects",
//     markers: true,
//     start: "50% 0%",
//     end: "60% 0%",
//     scrub: 1,
//     duration: 1,
// }});

tl.to(".main",{
    backgroundColor: "#fff"
})

// til.to(".main",{
//     backgroundColor: "#000"
// })