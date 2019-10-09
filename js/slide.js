
$(function() {
    var slides = $(".slideshow img");
    var slideCount = slides.length;

    console.log(slides);

    currentIndex = 0;
    slides.eq(currentIndex).fadeIn();
    var next = (current +1) %4;

    setInterval(showNextSlide,2000);

    function showNextSlide() {
        
        nextIndex = (currentIndex + 1) %4;
        
        slides.eq(currentIndex).fadeOut();
        slides.eq(nextIndex).fadeIn();
        
        currentIndex = nextIndex;
    }
})

