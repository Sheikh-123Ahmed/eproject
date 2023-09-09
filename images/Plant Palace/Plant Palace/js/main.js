(function ($) {
    "use strict";

    // Spinner
       // Preloader
       document.addEventListener("DOMContentLoaded", function () {
        // Hide the preloader when the page content is fully loaded
        var preloader = document.getElementById("preloader");
        preloader.style.display = "none";
      });
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbarf
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
  

    document.addEventListener("DOMContentLoaded", function () {
        var backToTopButton = document.getElementById("backToTop");
    
        // Show or hide the button based on scroll position
        window.addEventListener("scroll", function () {
          if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
          } else {
            backToTopButton.style.display = "none";
          }
        });
    
        // Scroll to the top when the button is clicked
        backToTopButton.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    
    
})(jQuery);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);


      // Enable form validation using Bootstrap
      (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();


    const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});