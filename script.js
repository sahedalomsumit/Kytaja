//navbar scrool effect
gsap.to(".nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "70px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    //markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

//custom cursor
let body = document.querySelector("body");
let crsr = document.querySelector(".cursor");
let crsrBlur = document.querySelector(".cursor-blur");

body.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrBlur.style.left = dets.x - 250 + "px";
  crsrBlur.style.top = dets.y - 250 + "px";
});

//black background 2nd section
gsap.to("#main-sections", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main-sections",
    scroller: "body",
    start: "top -25%",
    end: "top -75%",
    //markers: true,
    scrub: 3,
  },
});

//navbar cursor change
let navLinks = document.querySelectorAll(".nav-ul li");
navLinks.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.backgroundColor = "transparent";
    crsr.style.border = "1px solid #fff";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.backgroundColor = "#91b508";
    crsr.style.border = "0px solid #fff";
  });
});

//about us stagger
gsap.from(".about-us-columns", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".about-us-columns",
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    //markers: true,
    scrub: 1,
  },
});

gsap.from(".box", {
  y: 90,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    //markers: true,
    scrub: 2,
  },
});

gsap.from(".quote-left", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#quote",
    scroller: "body",
    scrub: 4,
    start: "top 60%",
    end: "top 40%",
  },
});

gsap.from(".quote-right", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#quote",
    scroller: "body",
    scrub: 4,
    //markers:true,
    start: "top 30%",
    end: "top 10%",
  },
});

gsap.to(".heading-waiting", {
  y: -100,
  scrollTrigger: {
    trigger: ".heading-waiting",
    scroller: "body",
    scrub: 2,
    //markers:true,
    start: "top 70%",
    end: "top 55%",
  },
});
