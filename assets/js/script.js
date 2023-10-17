(function($) {
  $(document).ready(function() {


  $('body a').each(function(){ 
    var oldUrl = $(this).attr("href"); 
    var newUrl = ("/ordermeal" + oldUrl );
    $(this).attr("href", newUrl);
  });


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 250) {
            $('body').addClass('fixed-header');
        }
        else {
            $('body').removeClass('fixed-header');
        }
    });


    
  $(document.body).on('click', '.show_filter' ,function(){
    if ($('body').hasClass('active_filter')) {
      $('body').removeClass("active_filter");
    } else {
      $('body').addClass("active_filter");
    }
  });
    


  var swiper = new Swiper(".meal-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

  });



  $(".count_input span").on("click", function() {
    var $button = $(this);
    var oldValue = parseInt($button.parent().find("input").val());
    var newVal;

    if ($button.text() === "+") {
      newVal = oldValue + 1;
    } else {
      // Don't allow decrementing below zero
      newVal = (oldValue > 1) ? oldValue - 1 : 1;
    }
    $button.parent().find("input").val(newVal);
  });









  });
})(jQuery);


