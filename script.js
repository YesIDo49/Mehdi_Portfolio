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