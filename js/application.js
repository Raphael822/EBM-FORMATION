$(document).ready(function() {

    // CAROUSEL
    $('.carousel').flickity({
        imagesLoaded: true,
        pageDots: true,
        prevNextButtons: true,
        wrapAround: true,
        autoPlay: 1200
    });

    // ACCORDION
    $('.faqQuestion').on('click', function() {

        $(this)
            .toggleClass('opened')
            .next('.faqReponse').slideToggle(5)
            .parent('.faq')
            .siblings('.faq')
            .find('.faqQuestion').removeClass('opened')
            .next('.faqReponse').slideUp(5);
    });


});