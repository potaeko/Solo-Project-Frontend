/* =============================================
                 Preloader
    select 'window' on load and function 
    make sure that whole website is loaded
============================================= */
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =============================================
                    Team Section
============================================= */


$(function(){ 
    //Select id="team-members"
    $("#team-members").owlCarousel({
        //Customize owlCarousel
        //https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true, 
        autoPlayPause: true, //Mouse Hover Pause
        nav: true, //Prev-Next Button
        dots: false, //Hide Dots
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0:{
                items: 1
            },
            //breakpoint from 480 up
            480:{
                items:2
            }
        }
    }); 
});

/* =============================================
                Progress Bars
============================================= */
$(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            },2000);
        });
        
        this.destroy();
    },{offset: 'bottom-in-view'});
    
});

/* =============================================
                Responsive Tabs
============================================= */
$(function(){
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
})

/* =============================================
                Portfolio Isotope
============================================= */

$(window).on('load', function(){

    //Initialize Isotope
    $("#isotope-container").isotope({
    });

    // filter items on button click
    $("#isotope-filters").on( 'click', 'button', function() {

        // get filter value from 'data-filter'
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({ 
            filter: filterValue 
        });

        //Add & Remove active Class to button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
      });

});

/* =============================================
                Portfolio Isotope
============================================= */
$(function(){
    
    $('#portfolio-wrapper').magnificPopup({
        // Select <a> Child
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        }

    });
});

/* =============================================
                Testimonials Section, Slider
============================================= */
$(function(){ 
    //Select id="testimonial-slider"
    $("#testimonial-slider").owlCarousel({
        //Customize owlCarousel
        //https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true, 
        autoPlayPause: true, //Mouse Hover Pause
        nav: true, //Prev-Next Button
        dots: false, //Hide Dots
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    }); 
});
/* =============================================
                Stats Section, Counter
============================================= */
$(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/* =============================================
                Clients Section, Slider
============================================= */
$(function(){ 
    //Select id="testimonial-slider"
    $("#clients-list").owlCarousel({
        //Customize owlCarousel
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true, 
        autoPlayPause: true, //Mouse Hover Pause
        nav: true, //Prev-Next Button
        dots: false, //Hide Dots
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0:{
                items: 2
            },
            //breakpoint from 480 up
            480:{
                items:3
            },
            768:{
                items:6
            }
        }
    }); 
});
/* =============================================
                Google Map
============================================= */
$(window).on('load', function(){

    //Map variables
    var addressString= '1510 33rd Ave, San Francisco, CA, 94122, USA';
    var myLatlng = {lat: 37.758911, lng: -122.491570};

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 12,
        center: myLatlng
    });
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    })
    // 3. Info window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    //show info window when user clicks marker
    marker.addListener('click',function(){
        infowindow.open(map,marker);
    });
    // 4. Resize Function, 
    google.maps.event.addDomListener(window,'resize', function(){

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });
});

/* =============================================
                Navigation
============================================= */
// Show & Hide White Navigation
$(function(){

    //Show/Hide Nav on page load at any scroll position on page
    $(window).scroll(function(){

        showHideNav();
    });

    function showHideNav(){
        if($(window).scrollTop()>50) {
            // Show white nav
            //alert("Your scroll position = " +$(window).scrollTop())
            $("nav").addClass("white-nav-top");

            //Show Dark Logo
            $(".navbar-brand img").attr("src","img/logo/logo-dark.png");

            //Show Back To Top Button
            $("#back-to-top").fadeIn();
        }
        else{
            //Hide white nav
            $("nav").removeClass("white-nav-top");

            //Show White Logo
            $(".navbar-brand img").attr("src","img/logo/logo.png");

            //Hide Back To Top Button
            $("#back-to-top").fadeOut();

        }
    }
});

//Smooth Scrolling When Click on Nav
$(function(){

    $("a.smooth-scroll").click(function(event){

        event.preventDefault();

        //get section id like #home, #about, #service, #work ,#blog, #contact
        var section_id = $(this).attr("href");
        
        //jQuery animate method
        $("html, body").animate({
            //target at "section_id", offset() get top and left position
            //offset 64px
            scrollTop: $(section_id).offset().top - 64
            //1250 = 1.25 s
        }, 1250, "easeInOutExpo");
    })
});

/* =============================================
                Mobile Menu
============================================= */
$(function(){

    //Show Mobile Nav when click open button
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");

    });

    //Hide Mobile Nav when click close button and menu link
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height","0%");

    });
});

/* =============================================
                    Animation
============================================= */
//WOW, Animate On Scroll
$(function(){
    new WOW().init();
});

//home animation on page load
$(window).on('load',function(){
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    //Class infinite for infinite loop
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});