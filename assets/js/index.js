$(document).ready(function(){
    $(window).scroll(function(){
        let header = $('#header');
        let height = $(window).scrollTop();
        if(height > 70){
            header.addClass('scrollActive');
        } else {
            header.removeClass('scrollActive');
        }
    })
})