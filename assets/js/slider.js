$(document).ready(function(){
    var slideIndex = 1;
    var slides = $('.slider-item');
    var dots = $('.slider-dot').children();
    var prevSlider = $('#prev-slider');
    var nextSlider = $('#next-slider');
    const showSlides = (n) => {
        var i;
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).css('display','none');  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = $(dots[i]).attr('class','');
        }
        $(slides[slideIndex-1]).css('display','block');
        $(dots[slideIndex-1]).addClass('active');
    }
    showSlides(slideIndex);
    const plusSlider = (n) => {
        showSlides(slideIndex += n);
    }
    prevSlider.on('click',function(){
        plusSlider(-1);
    })
    nextSlider.on('click',function(){
        plusSlider(1);
    })
    setInterval(() => {
        if(slides.length == slideIndex){
            slideIndex = 1;
        } else {
            slideIndex += 1;
        }
        showSlides(slideIndex);
    }, 5000);
})