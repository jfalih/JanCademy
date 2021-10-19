$(document).ready(function(){
    $(window).scroll(function(){
        let header = $('#header');
        let height = $(window).scrollTop();
        if(height > 70){
            header.addClass('scrollActive');
        } else {
            header.removeClass('scrollActive');
        }
    });
    console.log($('#listcategory')[0].scrollWidth)
    $('#right-button-category').click(function(e) {
        e.preventDefault();
        $('#listcategory').animate({
          scrollLeft: "+=200px"
        });
      });
      
       $('#left-button-category').click(function(e) {
        e.preventDefault();
        $('#listcategory').animate({
          scrollLeft: "-=200px"
        });
      });
})