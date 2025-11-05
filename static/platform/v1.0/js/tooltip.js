// external js: isotope.pkgd.js

function addTooltip() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-punk',
        position: 'right',
        'maxWidth': 450, // set max width of tooltip box
        contentAsHTML: true, // set title content to html
        trigger: 'custom', // add custom trigger
        interactive: true,
        triggerOpen: { // open tooltip when element is clicked, tapped (mobile) or hovered
            click: true,
            tap: true,
            mouseenter: true
        },
        triggerClose: { // close tooltip when element is clicked again, tapped or when the mouse leaves it
            click: true,
            scroll: false, // ensuring that scrolling mobile is not tapping!
            tap: true,
            mouseleave: true
        }
    });
};

function addMobileTooltip() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-punk',
        position: 'bottom',
        'maxWidth': 450, // set max width of tooltip box
        contentAsHTML: true, // set title content to html
        trigger: 'custom', // add custom trigger
        interactive: true,
        triggerOpen: { // open tooltip when element is clicked, tapped (mobile) or hovered
            click: true,
            tap: true,
            mouseenter: true
        },
        triggerClose: { // close tooltip when element is clicked again, tapped or when the mouse leaves it
            click: true,
            scroll: false, // ensuring that scrolling mobile is not tapping!
            tap: true,
            mouseleave: true
        }
    });
};


var width = $(window).width();
        if (width > 767) {
            addTooltip();
        } else {
            addMobileTooltip();
        }
