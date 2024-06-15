let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-60px"; // Adjust this value based on your header height
    }
    prevScrollPos = currentScrollPos;
}
