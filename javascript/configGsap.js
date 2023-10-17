gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".contentProyects_proyect").forEach((panel,i)=>{
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false
    })
})