const slider3 = document.querySelector(".slider3");
const nextBtn3 = document.querySelector(".next-btn3");
const prevBtn3 = document.querySelector(".prev-btn3");
const slides3 = document.querySelectorAll(".slide3");
const slideIcons3 = document.querySelectorAll(".slide3-icon");
const numberOfSlides3 = slides3.length;
var slideNumber3 = 0;

//image slider3 next button
nextBtn3.addEventListener("click", () => {
    slides3.forEach((slide3) => {
        slide3.classList.remove("active");
    });
    slideIcons3.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber3++;

    if(slideNumber3 > (numberOfSlides3 - 1)){
        slideNumber3 = 0;
    }

    slides3[slideNumber3].classList.add("active");
    slideIcons3[slideNumber3].classList.add("active");
});

//image slider3 previous button
prevBtn3.addEventListener("click", () => {
    slides3.forEach((slide3) => {
        slide3.classList.remove("active");
    });
    slideIcons3.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber3--;

    if(slideNumber3 < 0){
        slideNumber3 = numberOfSlides3 - 1;
    }

    slides3[slideNumber3].classList.add("active");
    slideIcons3[slideNumber3].classList.add("active");
});

//image slider3 autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides3.forEach((slide3) => {
            slide3.classList.remove("active");
        });
        slideIcons3.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber3++;

        if(slideNumber3 > (numberOfSlides3 - 1)){
            slideNumber3 = 0;
        }

        slides3[slideNumber3].classList.add("active");
        slideIcons3[slideNumber3].classList.add("active");
    }, 400000);
}
repeater();

//stop the image slider3 autoplay on mouseover
slider3.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//start the image slider3 autoplay again on mouseout
slider3.addEventListener("mouseout", () => {
    repeater();
});
