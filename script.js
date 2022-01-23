function responsiveMenu(){
 menu = document.querySelector("#menu");
 dashboard = document.querySelector(".dashboard");
 icon = document.querySelector("#iconMenu");


  if (menu.className === "") {
   menu.classList.add("close");
   dashboard.style.display = "none";
   icon.classList.remove("fa-bars");
   icon.classList.add("fa-times");
  } else {
   menu.className = "";
   dashboard.style.display = "flex";
   icon.classList.remove("fa-times");
   icon.classList.add("fa-bars");
  }
 }

// Cursor

var cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e=>{
 cursor.setAttribute("style", "top:" + (e.pageY -10) +"px; left:" + (e.pageX-10)+"px");
})

 var cursorFill = document.querySelector(".cursor-fill");
 document.addEventListener('mousemove', e=>{
  cursorFill.setAttribute("style", "top:" + (e.pageY -10) +"px; left:" + (e.pageX-10)+"px");

})


//Read more

function growDiv(divid) {
 var growDiv = document.getElementById(divid);
 var iconArrow = growDiv.parentElement.querySelector(".fa-arrow-circle-down")

 //var growDiv = document.querySelector('.grow');
 if (growDiv.clientHeight) {
  growDiv.style.height = 0;
  iconArrow.style.transform = "rotate(0deg)";
 } else {
  var wrapper = document.querySelector('.measuringWrapper');
  growDiv.style.height = wrapper.clientHeight + "px";
  iconArrow.style.transform = "rotate(180deg)";

 }
 document.querySelectorAll(".more-button").value = document.querySelectorAll(".more-button").value == 'Read more' ? 'Read less' : 'Read more';
}


//scroll effect

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
 // Global settings:
 disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
 startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
 initClassName: 'aos-init', // class applied after initialization
 animatedClassName: 'aos-animate', // class applied on animation
 useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
 disableMutationObserver: false, // disables automatic mutations' detections (advanced)
 debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
 throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


 // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
 offset: 120, // offset (in px) from the original trigger point
 delay: 0, // values from 0 to 3000, with step 50ms
 duration: 400, // values from 0 to 3000, with step 50ms
 easing: 'ease', // default easing for AOS animations
 once: false, // whether animation should happen only once - while scrolling down
 mirror: false, // whether elements should animate out while scrolling past them
 anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


//cursor

var cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e=>{
 cursor.setAttribute("style", "top:" + (e.pageY -10) +"px; left:" + (e.pageX-10)+"px");

})