$(document).ready(function() {
    $('#fullpage').fullpage();
    $('#pc > img').addClass('animated fadeInUp');
    $('#logo_svg').addClass('animated zoomIn');
    $('.description').addClass('animated fadeInDown');
    $('#books').addClass('animated fadeInLeft');
    $('#tablet').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    	$('#teclado').addClass('animated fadeInRight');
    });

    $(document).animateScroll();

});

