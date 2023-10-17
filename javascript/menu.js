const buttonOpen = document.querySelector(".containerMenu");
const buttonClose = document.querySelector(".close");

let t1 = gsap.timeline({defaults: {duration: 1, ease: "expo.inOut"}});

buttonOpen.addEventListener("click", ()=>{
    if(t1.reversed()) {
        t1.play();
    } else {
        t1.to(".header_nav", {right: 0})
        .to(".header_nav", {height:  "100vh"}, "-=.1")
        .to(".header_nav ul li a", {opacity: 1, PointerEvents: "all", stagger: .2}, "-=.8")
        .to(".header_nav_h2", {opacity: 1}, "-=1")
        .to(".close", {opacity: 1, PointerEvents: "all"}, "-=.8");
    }
})

buttonClose.addEventListener("click", ()=>{    
    t1.reverse();
})