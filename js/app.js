
  $(window).scroll(function() {

            var scroll = $(window).scrollTop();

            if (scroll > 50) {
                $('.top-bar').addClass('scrolled');
            }

            if (scroll <= 50) {
                $('.top-bar').removeClass('scrolled');
            }

        });