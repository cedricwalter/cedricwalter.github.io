$(document).ready(function () {
    $('.tooltip').tooltipster({
        contentCloning: true,
        plugins: ['sideTip', 'scrollableTip'],
        animation: 'fade',
        delay: 200,
        contentAsHTML: true,
        maxWidth: 500,
        theme: 'tooltipster-noir',
        repositionOnScroll: true,
        interactive: true
    });
});
