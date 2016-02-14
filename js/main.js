$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});



// var myVideo = document.getElementById("video1");

//function playPause() { 
//    if (myVideo.paused) 
//        myVideo.play(); 
//    else 
//        myVideo.pause(); 
//}



//var tmpl = document.getElementById('header');
//document.body.appendChild(tmpl.content.cloneNode(true));

//$(document).ready(function(){
//  $("#header").load("header.txt");
//});