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

function growDiv() {
 var growDiv = document.querySelector('.grow');
 if (growDiv.clientHeight) {
  growDiv.style.height = 0;
 } else {
  var wrapper = document.querySelector('.measuringWrapper');
  growDiv.style.height = wrapper.clientHeight + "px";
 }
 document.getElementById("more-button").value = document.getElementById("more-button").value == 'Read more' ? 'Read less' : 'Read more';
}