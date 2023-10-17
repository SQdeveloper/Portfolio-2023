function initializeSwiper(selector, options) {
    const swiper = new Swiper(selector, {
        loop: true,
        ...options,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }        
    });
    swiper.init();
    return swiper;
}

const swiperOne = initializeSwiper(".swiper.one", {
    slidesPerView: "auto"
})

swiperOne.on("slideChange", ()=>{
    function animateElements(elements, animationOptions) {
        elements.forEach(element => {
            gsap.from(element, animationOptions);            
        });
    }

    const activeIndex = swiperOne.activeIndex;
    const activeSlide = document.querySelector(`.swiper.one .swiper-slide:nth-child(${activeIndex + 1})`);

    const largeTextbofore = activeSlide.querySelectorAll(".large-text.before");
    const largeTextafter = activeSlide.querySelectorAll(".large-text.after");
    const images = activeSlide.querySelectorAll(".image-wrap img");

    const commonAnimationOptions = {
        x: 100,
        opacity: 0,
        duration: .85,
        ease: "power2.inOut"
    }

    animateElements(largeTextbofore, commonAnimationOptions);
    animateElements(largeTextafter, commonAnimationOptions);

    images.forEach(image => {
        gsap.from(image, {
            scale: 1.2,
            duration: .85,
            ease: "power2.inOut"
        })
    })
    updateCustomPagination(swiperOne);
});

function updateCustomPagination(swiper) {
    const currentIndex = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length;
    
    const customPaginationElement = document.querySelector(".carousel-footer .counter-indicator");
    customPaginationElement.textContent = `${currentIndex}/${totalSlides}`
}

const swiperTwo = initializeSwiper(".swiper.two", {
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    }
})

////////////////////////////

swiperTwo.on("slideChange",()=>{
    function animateTimelineElements(timeline, elements, animationOptions) {
        elements.forEach(element => {
            timeline.from(element, animationOptions, "<0.2");            
        });
    }

    const activeIndex = swiperTwo.activeIndex;
    const activeSlide2 = document.querySelector(`.swiper.two .swiper-slide:nth-child(${activeIndex + 1})`);

    const designer = activeSlide2.querySelectorAll(".about .designer");
    const client = activeSlide2.querySelectorAll(".about .client");
    const date = activeSlide2.querySelectorAll(".about .date");

    const commonAnimationOptions = {
        x: 10,
        opacity: 0,
        duration: .85,
        ease: "power2.inOut"
    }

    const tl = gsap.timeline({});

    animateTimelineElements(tl, designer, commonAnimationOptions);
    animateTimelineElements(tl, client , commonAnimationOptions);    
    animateTimelineElements(tl, date , commonAnimationOptions);    
});