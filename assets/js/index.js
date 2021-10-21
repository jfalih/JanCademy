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
    let open_sidebar = $('#open-sidebar');
    let close_sidebar = $('#close-sidebar');
    open_sidebar.click(function(){
      $('#sidebar').addClass('active');
    })
    close_sidebar.click(function(){
      $('#sidebar').removeClass('active');
    })
    // Category Slider Animate
    $('#right-button-category').click(function(e) {
        e.preventDefault();
        $('#list-category').animate({
          scrollLeft: "+=200px"
        });
      });
    $('#left-button-category').click(function(e) {
      e.preventDefault();
      $('#list-category').animate({
        scrollLeft: "-=200px"
      });
    });

    // Course Slider Animate
    $('#right-button-course').click(function(e) {
        e.preventDefault();
        $('#list-course').animate({
          scrollLeft: "+=200px"
        });
      });
    $('#left-button-course').click(function(e) {
      e.preventDefault();
      $('#list-course').animate({
        scrollLeft: "-=200px"
      });
    });
    // Question Slider Animate
    $('#right-button-question').click(function(e) {
      e.preventDefault();
      $('#list-question').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#left-button-question').click(function(e) {
      e.preventDefault();
      $('#list-question').animate({
        scrollLeft: "-=200px"
      });
    });
    
    // Question Slider Animate
    $('#right-button-video').click(function(e) {
      e.preventDefault();
      $('#list-video').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#left-button-video').click(function(e) {
      e.preventDefault();
      $('#list-video').animate({
        scrollLeft: "-=200px"
      });
    });

    $('#recomendation-course-detail-right').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-detail').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#recomendation-course-detail-left').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-detail').animate({
        scrollLeft: "-=200px"
      });
    });

    
    $('#recomendation-course-1-right').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-1').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#recomendation-course-1-left').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-1').animate({
        scrollLeft: "-=200px"
      });
    });
    
    $('#recomendation-course-2-right').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-2').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#recomendation-course-2-left').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-2').animate({
        scrollLeft: "-=200px"
      });
    });

    $('#right-button-category-list').click(function(e) {
      e.preventDefault();
      $('#list-category-course').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#left-button-category-list').click(function(e) {
      e.preventDefault();
      $('#list-category-course').animate({
        scrollLeft: "-=200px"
      });
    });
    
    $('#right-button-review').click(function(e) {
      e.preventDefault();
      $('#list-review').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#left-button-review').click(function(e) {
      e.preventDefault();
      $('#list-review').animate({
        scrollLeft: "-=200px"
      });
    });
    $('#question-1-list-right').click(function(e) {
      e.preventDefault();
      $('#question-1-list').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#question-1-list-left').click(function(e) {
      e.preventDefault();
      $('#question-1-list').animate({
        scrollLeft: "-=200px"
      });
    });

    $('#question-2-list-right').click(function(e) {
      e.preventDefault();
      $('#question-2-list').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#question-2-list-left').click(function(e) {
      e.preventDefault();
      $('#question-2-list').animate({
        scrollLeft: "-=200px"
      });
    });
})