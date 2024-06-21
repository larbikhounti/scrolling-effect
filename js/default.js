
// get refercences
var player = document.querySelector("dotlottie-player");
// on scroll
let scrollval = 0;
window.addEventListener("scroll", () => {
    
    if (scrollval > window.scrollY) {
        //  // change direction to backwards
        player.setDirection(-1);
        player.play();

    } else if(scrollval < window.scrollY) {
        // change direction to upwards
        player.setDirection(1);
        player.play();
    }
    scrollval = window.scrollY;
});

// if stops scrolling
var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
        // if stops scrolling pause
        player.pause();
    }, 0);
}, false);
