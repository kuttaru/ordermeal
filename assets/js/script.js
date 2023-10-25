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







  });
})(jQuery);


