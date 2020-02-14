(function ($) {
    "use strict";

    if(localStorage.getItem('user') === null) {
        localStorage.setItem('user', '[{"email":"demo@demo.com","password":"demo", "username":"woadud akand"}]');
    }
    //single listing
    var single_listing = $(".atbd_single_listing");
    var slWidth = single_listing.width();
    if(slWidth <= 300){
        single_listing.addClass("rs_fix");
    }     
        
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
        
        $(".atbdp_child_category").hide();
        $(".atbdp_parent_category > li > span").on("click", function () {
        $(this).siblings(".atbdp_child_category").slideToggle();
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active");
        }
        });

        //search categories
        var search_field = $(".top-search-field");
        search_field.on("click", function (e) {
            $(this).parents(".search_module").addClass("active");
            e.stopPropagation();
        });
        
        $(document).on("click", function () {
            $(".search_module").removeClass("active");
        });


        // listing details gallery
        $(".gallery-images").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<span class="slick-arrow prev-arrow"><i class="la la-angle-left"></i></span>',
            nextArrow: '<span class="slick-arrow next-arrow"><i class="la la-angle-right"></i></span>',
            fade: true,
            asNavFor: ".gallery-thumbs"
        });
        $(".gallery-thumbs").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".gallery-images",
            dots: false,
            arrows: false,
            focusOnSelect: true
        });
        
        //counter
        $(".count_up").counterUp({
            time: 1000
        });

        /* FAQ Accordion */
        var allPanels = $('p.ac-body').hide();
        var selectedPanel = $(".accordion-single.selected p.ac-body").show();
        $('.accordion-single > .faq-title > a').on("click", function(e) {
            allPanels.slideUp();
            $(this).parent().next().slideDown();
            $(this).parent().parent().addClass('selected').siblings().removeClass('selected');
            e.preventDefault();
        });
        
        // initialize select 2
        $("#at_biz_dir-category").select2({
            placeholder: "Select a category",
            width: "100%",
            containerCssClass: "form-control"
        });

        $("#at_biz_dir-location").select2({
            multiple: false,
            width: "100%",
            placeholder: "Select a location",
            containerCssClass: "form-control"
        });

        $(".ad_search_category").select2({
            placeholder: "Select Category",
            width: "100%",
            containerCssClass: "form-control"
        });
        $("#atbd_tags").select2({
            tags: true,
            tokenSeparators: [','],
            placeholder: "Select or insert new tags",
            width: "100%",
            containerCssClass: "form-control form-control-tags"
        });
        // enable bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // replace all SVG images with inline SVG
        $("img.svg").each(function () {
        var $img = $(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        $.get(imgURL, function (data) {
            //get the svg tag, ignore the rest
            var $svg = jQuery(data).find("svg");

            //Add replaced image's ID to the new SVG
            if(typeof imgID !== "undefined"){
                $svg = $svg.attr("id", imgID);
            }

            //Add replaced image's classes to the new SVG
            if(typeof imgClass !== "undefined"){
                $svg = $svg.attr('class', imgClass + " replaced-svg");
            }

            // remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            //replace image width new SVG
            $img.replaceWith($svg);

        }, 'xml');
        });
    
        // listing details gallery
        $(".gallery-images").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<span class="slick-arrow prev-arrow"><i class="la la-angle-left"></i></span>',
            nextArrow: '<span class="slick-arrow next-arrow"><i class="la la-angle-right"></i></span>',
            fade: true,
            asNavFor: ".gallery-thumbs"
        });
        $(".gallery-thumbs").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".gallery-images",
            dots: false,
            arrows: false,
            focusOnSelect: true
        });       

        $(".atbdp_child_category").hide();
        $(".atbdp_parent_category > li > span").on("click", function () {
        $(this).siblings(".atbdp_child_category").slideToggle();
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active");
        }
        });

        //custom scrollbar
        $(".tags-checklist, .showContent").mCustomScrollbar({
            axis: "y",
            scrollInertia: 300,
            scrollEasing: "easeIn"
        });

        //show more / less js for features in sidebar search
        $(".filter-checklist .show-link").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            var $content = $this.prev(".feature-checklist");
            var linkText = $this.text().toUpperCase();

            if(linkText === "SHOW MORE"){
                linkText = "Show Less";
                $content.toggleClass("hideContent").addClass("showContent");
            }else{
                linkText = "Show More";
                $content.toggleClass("showContent").addClass("hideContent");
            }
            $this.text(linkText);
        });
        // Price Range Slider    

        //add listing pricing options
        var priceOne = $("#price-input");
        var priceTwo = $("#price-input-range").hide();
        $("#price_one").on("click", function (e) {
            if($(this).is(":checked")){
                priceOne.show();
                $("#price_two").prop("checked", false);
                priceTwo.hide();
            }else {
                e.preventDefault();
            }
        });
        $("#price_two").on("click", function (e) {
            if($(this).is(":checked")){
                priceTwo.show();
                $("#price_one").prop("checked", false);
                priceOne.hide();
            }else {
                e.preventDefault();
            }
        });

        // social information in add listing page
        $(".copy-btn").on("click", function (e) {
            var $el = $("#social-form-fields");
            $el.clone(true).appendTo(".atbdp_social_field_wrapper");
            e.preventDefault();
        });
        $("#removeSocial").on("click", function () {
            $(this).parents("#social-form-fields:not(:first-child)").remove();
        });

        //map coordinate
        var menual_cor = $("#hide_if_no_manual_cor").hide();
        $("#manual_coordinate").on("click", function () {
        if($(this).is(":checked")){
            menual_cor.show();
        }else{
            menual_cor.hide();
        }
        });
        
        /* offcanvas menu */
        var oc_menu = $(".offcanvas-menu__contents");
        $(".offcanvas-menu__user").on("click", function (e) {
            oc_menu.addClass("active");
            e.preventDefault();
        });
        $(".offcanvas-menu__close").on("click", function (e) {
            oc_menu.removeClass("active");
            e.preventDefault();
        });

            //Video Popup
    }
    function video () {
        $('.video-iframe').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: function(url) {
                            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                            if ( !m || !m[1] ) return null;
                            return m[1];
                        },
                        src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: function(url) {
                            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                            if ( !m || !m[5] ) return null;
                            return m[5];
                        },
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    }
                },
                srcAction: 'iframe_src'
            },
            mainClass: 'mfp-fade'
        });
    }

    function review () {
        /* bar rating plugin installation */
        $('.give_rating').barrating({
            theme: 'fontawesome-stars',
            showSelectedRating: true
        });

        
        /* review reply form */
        $(".review_content .reply").on("click", function (e) {
            e.preventDefault();
            if($(this).parent().next().hasClass("active")){
                $(this).parent().next().removeClass("active")
            }else {
                $(this).parent().next().addClass("active");
            }
        });

        /* custom upload file name */
        $("#atbd_review_attachment").on("change", function () {
        var file = $("#atbd_review_attachment")[0].files[0].name;
        $("#file_name").html(file);
        });
    }

    $(document).ready(() => {
        video();
        review();
        react_version(); 
    });

    var url = window.location.href;
    setInterval(() => {
        var url2 = window.location.href;
        if(url !== url2){
            url = url2;
            video();
            review();
            react_version(); 
            $(window).scrollTop(0);           
        }
        /* END OF ON LOAD FUNCTION */        
    }, 100);

})(jQuery);