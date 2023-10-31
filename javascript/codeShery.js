Shery.makeMagnet(".magnet");
Shery.mouseFollower();

Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
    videos: ["../assets/videos/hackerMask.mp4", "../assets/videos/girlMachine.mp4", "../assets/videos/keyboard.mp4"],   
});

Shery.imageMasker(".target-view-proyect" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "View Proyect",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });