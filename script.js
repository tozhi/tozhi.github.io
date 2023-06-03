//script.js
$(document).ready(function() {
    // Smooth scrolling for navbar links
    $(".navbar a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          5,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });

    $(document).ready(function() {
      var introImg = $(".intro img");
      var introImgPosition = introImg.offset().top;
      var windowHeight = $(window).height();
      var scrollPosition = $(this).scrollTop();
    
      if (scrollPosition > introImgPosition - windowHeight + 200) {
        introImg.addClass("fade-in");
      }
    });
    
    
  
    // Navbar color change on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("scrolled");
      } else {
        $(".navbar").removeClass("scrolled");
      }
    });

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 0) {
        $('.navbar').addClass("navbar-shrink");
      } else {
        $('.navbar').removeClass("navbar-shrink");
      }
    });
  
    // Form submission
    $("#contactForm").submit(function(event) {
      event.preventDefault();
  
      var formData = $(this).serialize();
      // Perform AJAX request here to submit the form data
  
      // Clear form fields after submission
      $(this).trigger("reset");
    });
  
    // Check initial scroll position
    if ($(window).scrollTop() > 100) {
      $(".navbar").addClass("scrolled");
    }
  });

  
  