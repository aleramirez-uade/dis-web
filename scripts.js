$(document).ready(function () {
    // Configurar el efecto parallax
    $(window).on('scroll', function () {
        $('.portfolio-section').each(function () {
            const scrollPosition = $(window).scrollTop();
            const offset = $(this).offset().top;
            const speed = 0.5; // Ajustar velocidad del efecto
            if (scrollPosition + $(window).height() > offset) {
                $(this).css('background-position', `center ${-(scrollPosition - offset) * speed}px`);
            }
        });
    });
});
