$(document).ready(function () {
        /// Scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 5000) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
    });
    $('.scroll-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    var AFFIX_TOP_LIMIT = 300;
    var AFFIX_OFFSET = 49;

    var $menu = $("#menu"),
		$btn = $("#menu-toggle");

    $("#menu-toggle").on("click", function () {
        $menu.toggleClass("open");
        return false;
    });
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    $(".docs-nav").each(function () {
        var $affixNav = $(this),
			$container = $affixNav.parent(),
			affixNavfixed = false,
			originalClassName = this.className,
			current = null,
			$links = $affixNav.find("a");

        function getClosestHeader(top) {
            var last = $links.first();

            if (top < AFFIX_TOP_LIMIT) {
                return last;
            }

            for (var i = 0; i < $links.length; i++) {
                var $link = $links.eq(i),
					href = $link.attr("href");

                if (href.charAt(0) === "#" && href.length > 1) {
                    var $anchor = $(href).first();

                    if ($anchor.length > 0) {
                        var offset = $anchor.offset();

                        if (top < offset.top - AFFIX_OFFSET) {
                            return last;
                        }

                        last = $link;
                    }
                }
            }
            return last;
        }


        $(window).on("scroll", function (evt) {
            var top = window.scrollY,
		    	height = $affixNav.outerHeight(),
		    	max_bottom = $container.offset().top + $container.outerHeight(),
		    	bottom = top + height + AFFIX_OFFSET;

            if (affixNavfixed) {
                if (top <= AFFIX_TOP_LIMIT) {
                    $affixNav.removeClass("fixed");
                    $affixNav.css("top", 0);
                    affixNavfixed = false;
                } else if (bottom > max_bottom) {
                    $affixNav.css("top", (max_bottom - height) - top);
                } else {
                    $affixNav.css("top", AFFIX_OFFSET);
                }
            } else if (top > AFFIX_TOP_LIMIT) {
                $affixNav.addClass("fixed");
                affixNavfixed = true;
            }

            var $current = getClosestHeader(top);

            if (current !== $current) {
                $affixNav.find(".active").removeClass("active");
                $current.addClass("active");
                current = $current;
            }
        });
    });
});
