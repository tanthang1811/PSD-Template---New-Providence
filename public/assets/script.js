var youAre = document.getElementsByClassName("youare")[0];

youAre.addEventListener('click', function(e) {
    if (e.target.classList.contains("option-box")) {
        var optionBoxes = document.getElementsByClassName("option-box");
        if (optionBoxes[0].classList.contains("active")) {
            $(".option-selector").css("left", "50%");
            optionBoxes[1].classList.add("active");
            optionBoxes[0].classList.remove("active");
        } else {
            $(".option-selector").css("left", "0%");
            optionBoxes[1].classList.remove("active");
            optionBoxes[0].classList.add("active");
        }
    }
});

var sideNavHam = document.getElementsByClassName("side-nav-ham");
var sideNav = document.getElementsByClassName("side-nav")[0];
var xCross = document.getElementsByClassName("x-cross")[0];


sideNavHam[0].addEventListener("click", function(e) {
    sideNav.classList.add("open");
});

sideNavHam[1].addEventListener("click", function(e) {
    sideNav.classList.add("open");
});

xCross.addEventListener("click", (e) => {
    sideNav.classList.remove("open");
});