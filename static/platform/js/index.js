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


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.color-shape'
});

// store filter for each group
var filters = {};

$('.filters').on( 'click', '.button', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

var slider = $('#slider').slider({
  min: 1,
  max: 2000,
  range: "min",
  value: 1,
  step: 1,
  slide: function( event, ui ) {
    $grid.isotope({ filter: function() {
      var number = $(this).find('.number').text();
      $( "#amount" ).val( "$ " + ui.value + " million");
      return parseInt( number, 10 ) > ui.value;
    } });
  }
});
$( "#amount" ).val( "$ " + $( "#slider" ).slider( "value" ) + " million" );

var slider = $('#blocktime_slider').slider({
  min: 1,
  max: 601,
  range: "min",
  value: 601,
  step: 10,
  slide: function( event, ui ) {
    $grid.isotope({ filter: function() {
      var number = $(this).find('.blocktime').text();
      $( "#blocktime" ).val( "" + ui.value + " seconds");
      return parseInt( number, 10 ) < ui.value;
    } });
  }
});
$( "#blocktime" ).val( "" + $( "#blocktime_slider" ).slider( "value" ) + " seconds");

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


var width = $(window).width();
        if (width > 767) {
            addTooltip();
        } else {
            addMobileTooltip();
        }
