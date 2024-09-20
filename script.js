$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Toggle menu for mobile
    $('#menu-toggle').click(function() {
        $('#nav-links').toggleClass('open');
    });
});

// Navbar sanduíche para mobile
$('#menu-toggle').click(function() {
    $('#nav-links').slideToggle(); // Usar slideToggle para o efeito dropdown
});

$(document).ready(function(){
    // Toggle menu for mobile
    $('#menu-toggle').click(function() {
        $('#nav-links').toggleClass('open');
    });
});