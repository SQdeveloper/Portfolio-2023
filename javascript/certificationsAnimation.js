
$(document).ready(function() {
    TweenMax.set(".proyect-preview", {width:0});

    let t1 =new TimelineLite();

    $(document).on("mouseover", ".navigation-item", function(evt) {
        t1 = new TimelineLite();    
        t1.to(".proyect-preview", 1, {
            width: "600px",
            ease: Expo.easeInOut
        })
    }).on("mouseout", ".navigation-item", function(evt) {
        t1 = new TimelineLite();
        t1.to(".proyect-preview", .5, {
            width: 0,
            ease: Expo.easeInOut
        })
    })
})

$(".navigation-link-1").hover(function() {
    $(".proyect-preview").css({ "background-image": "url(../assets/img/proyects/Cr7page.png)" });
  });

  $(".navigation-link-2").hover(function() {
    $(".proyect-preview").css({ "background-image": "url(../assets/img/proyects/PoolDorado.png)" });
  });

  $(".navigation-link-3").hover(function() {
    $(".proyect-preview").css({ "background-image": "url(../assets/img/proyects/PoolDorado.png)" });
  });

  $(".navigation-link-4").hover(function() {
    $(".proyect-preview").css({ "background-image": "url(../assets/img/proyects/PoolDorado.png)" });
  });

  $(".navigation-link-5").hover(function() {
    $(".proyect-preview").css({ "background-image": "url(../assets/img/proyects/PoolDorado.png)" });
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $(".progressbar").css("height", scrollPercent + "%");
  });