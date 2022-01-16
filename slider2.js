const slider2 = document.querySelector(".slider2");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide2");
const slideIcons = document.querySelectorAll(".slide2-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider2 next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide2) => {
        slide2.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider2 previous button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide2) => {
        slide2.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider2 autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide2) => {
            slide2.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 400000);
}
repeater();

//stop the image slider2 autoplay on mouseover
slider2.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//start the image slider2 autoplay again on mouseout
slider2.addEventListener("mouseout", () => {
    repeater();
});
