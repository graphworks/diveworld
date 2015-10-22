define(['jquery', 'hmbrgr', 'stellar', 'owl', 'flickerplate', 'dropdown', 'swipe'], function () {
	

    $(document).ready(function () {  
        
        // Hiding section alpha headlings
        $('.alpha').wrapInner('<span />');
	    $('.alpha span').css({'position': 'absolute', 'left': '-10000px'});
        
        // Renders hamburger menu
        $('.hmbrgr.one').hmbrgr();
        
        // Renders Dropdown menu
        $(".dropdowns").dropdowns({
            toggleWidth: 821
        });
        
        // Renders Stellar for Parallax env.
        $(window).stellar({
            horizontalScrolling: false,
        });
        
        // double lined menu onscroll settings - delete if not needed
        $(window).scroll(function(){
            if ($(window).scrollTop() > 50) {
                $('#header').css('background','rgba(255, 255, 255, 1.0)');
                $('#header').css('margin-top','-46px');
                $('nav').css('margin-top','');
                $('a.logo img').css('margin-top','0').css('height','68px').css('width','auto');
            }
            else if ($(window).scrollTop() < 50) {
                $('#header').css('background','rgba(255, 255, 255, 1.0)');
                $('#header').css('margin-top','0px');
                $('nav').css('margin-top','');
                $('a.logo img').css('margin-top','-40px').css('height','auto').css('width','100%');
            }
        });
        
        // navigation scrollto
        var navheight = '75';
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - navheight
                    }, 1000);
                    return false;
                }
            }
        });
  
        //graphworks popup
        require(["../content/js/modules/plugins/popup.min.js"]);

        // Load, customize Flickerplate
        $('.flicker-slider').flickerplate({
            arrows: true,
            arrows_constraint: false,
            auto_flick: true,
            auto_flick_delay: 10,
            block_text: true,
            dot_alignment: 'center',
            dot_navigation: true,
            flick_animation: 'transition-slide',
            flick_position: 1,
            theme: 'light'
        });
        
        var elem = document.getElementById('mySwipe');
        window.mySwipe = Swipe(elem, {
          // startSlide: 4,
             auto: 6000,
          // continuous: true,
          // disableScroll: true,
          // stopPropagation: true,
          // callback: function(index, element) {},
          // transitionEnd: function(index, element) {}
        });
        
        // Renders Owl carousel
        $("#owl").owlCarousel({
            autoPlay: false,
            items: 6,
            itemsDesktop: [1199, 6],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [800, 3],
            itemsMobile: [480, 2]
        });
        
    });
});