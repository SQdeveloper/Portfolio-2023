let timel = gsap.timeline({scrollTrigger:{
    trigger:".contentTitleProyects",
    markers:false,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});

timel
.to(".contentTitleProyects_title-center",{
   height: "100vh",
},'a')
.to(".contentTitleProyects_title-top",{
   top: "-50%",
},'a')
.to(".contentTitleProyects_title-bottom",{
   bottom: "-50%",   
},'a')
.to("#topH",{
   top: "60%"
},'a')
.to("#bottomH",{
   bottom: "60%",
},'a')
.to(".carousel",{
   delay: -0.2,
   marginTop: "0%"
})