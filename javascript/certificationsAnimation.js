const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");


gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".desktopPhoto")

let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide  
  ScrollTrigger.create({
    trigger:".gallery",
    start:"top top",
    end:"bottom bottom",
    pin:".right"
  })

  //create scrolltrigger for each details section
  //trigger photo animation when headline of each details section 
  //reaches 80% of window height
  details.forEach((detail, index)=> {

    let headline = detail.querySelector("h1")
    let animation = gsap.timeline()
      .to(photos[index], {yPercent:0})
      .set(allPhotos[index], {autoAlpha:0})
    ScrollTrigger.create({
      trigger:headline,
      start:"top 80%",
      end:"top 50%",
      animation:animation,
      scrub:true,
      markers:false
    })
  })		    
});

/******* CERTIFICATIONS TITLE ANIMATION */
const Ctitles = document.querySelectorAll(".certifications_tContent_text p");

const callBack = (entries)=>{  
  entries.forEach(entry=>{
    if(entry.isIntersecting) {      
      Ctitles.forEach(title=>{
        title.classList.add("active");
      })    
    }
  })
}

const observer = new IntersectionObserver(callBack, {threshold:.8});

observer.observe(Ctitles[0]);