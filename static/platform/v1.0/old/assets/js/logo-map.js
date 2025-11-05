$(document).ready(function () {

    $('.tooltip').tooltipster({
        contentCloning: true,
        plugins: ['sideTip', 'scrollableTip'],
        animation: 'fade',
        delay: 200,
        contentAsHTML: true,
        maxWidth: 350,
        theme: 'tooltipster-noir',
        repositionOnScroll: true
    });

    $('.masonry').masonry({
        itemSelector: '.box'
    }).imagesLoaded().done(function () {
        $('.masonry').masonry('layout');
    });


});
$(window).load(function () {
    $('.masonry').masonry('layout');
});
