

  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js">


      $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') ==
 this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 500);
              return false;
            }
          }
        });
      });

