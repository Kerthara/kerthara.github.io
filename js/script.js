(function($) {
  'use strict';

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

  jQuery(window).load(function() {
    jQuery('#loaderInner').fadeOut();
    jQuery('#loader').delay(200).fadeOut('slow');
  });

  $(document).ready(function(){
    $('#block-slider').owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,
        pagination: false,
        singleItem: true,
        navigationText: ['<span class="icon-left-open-big"></span>','<span class="icon-right-open-big"></span>']
    });

    $('.percentage').each(function(){
      var  width= $(this).text();
      $(this).css('width', width).empty();
    });

    $('.box').magnificPopup({
      type: 'image',
      fixedContentPos: false,
      fixedBgPos: false,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });

    $('.filter li a').on("click", function(e){
      e.preventDefault();
      $(this).addClass('active');
      $(this).parent().siblings().find('a').removeClass('active');

      var filters = $(this).attr('data-filter');
      $(this).closest('.works').find('.item').parent().removeClass('disable');

      if (filters !== 'all') {
        var selected =  $(this).closest('.works').find('.item');

        for(var i = 0; i < selected.length; i++) {
          if (!selected.eq(i).hasClass(filters)) {
            selected.eq(i).parent().addClass('disable');
          }
        }
      }
    });

    $('.submit').on("click", function(){
      $('input#name').removeClass("errorForm");
      $('textarea#message').removeClass("errorForm");
      $('input#email').removeClass("errorForm");

      var error = false;
      var name = $('input#name').val();
      if(name == "" || name == " ") {
        error = true;
        $('input#name').addClass("errorForm");
      }

      var msg = $('textarea#message').val();
      if(msg == "" || msg == " ") {
        error = true;
        $('textarea#message').addClass("errorForm");

      }

      var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      var email = $('input#email').val();
      if (email == "" || email == " ") {
        $('input#email').addClass("errorForm");
        error = true;
      }else if (!email_compare.test(email)) {
        $('input#email').addClass("errorForm");
        error = true;
      }

      if(error == true) {
        return false;
      }

      $('#success').fadeIn('slow');

      return false;
    });
  });
})(jQuery);
