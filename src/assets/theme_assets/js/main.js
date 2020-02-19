(function ($) {
    "use strict";

    function react_version ()  {
        //setting css bg image as inline in html
        $(".bg_image_holder").each(function(){
            var $this = $(this);
            var imgLink = $this.children().attr("src");
            $this.css({
                "background-image": "url(" + imgLink + ")",
                "opacity": "1"
            }).children().attr('alt', imgLink)
        });
     
        var oc_menu = $(".offcanvas-menu__contents");
        $(".offcanvas-menu__user").on("click", function (e) {
            oc_menu.addClass("active");
            e.preventDefault();
        });
        $(".offcanvas-menu__close").on("click", function (e) {
            oc_menu.removeClass("active");
            e.preventDefault();
        });
    }
    $(document).ready(() => {

        react_version(); 
    });

})(jQuery);