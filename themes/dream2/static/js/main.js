'use strict'
$(document).ready(function () {

  tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.main',
    headingSelector: 'h1, h2, h3, h4, h5',
    hasInnerContainers: false,
    headingsOffset: 40,
    scrollSmoothOffset: -40,
  });

  // var e,
  //   a = $('body')
  //     .overlayScrollbars({
  //       className: (
  //         window.backgro:q:qundDark || window.backgroundImageDark
  //           ? 'y' === localStore.getItem('hugo-theme-dream-is-dark')
  //           : window.darkNav
  //       )
  //         ? 'os-theme-light'
  //         : 'os-theme-dark',
  //       scrollbars: { autoHide: 'scroll', clickScrolling: !0 },
  //     })
  //     .overlayScrollbars()
  // window.fixedNav &&
  //   ((e = $('.dream-nav')),
  //   a.options('callbacks.onScroll', function () {
  //     var a = this.scroll().position.y,
  //       o = $('.fake-dream-nav')
  //     0 < a
  //       ? (e.addClass('fixed').css('background', 'y' === window.isDark ? window.backgroundDark : window.background),
  //         $('.dream-single-aside').css('top', 54),
  //         o.length || $('<div class="fake-dream-nav" />').css('height', 54).insertBefore(e))
  //       : (e.removeClass('fixed').css('background', 'unset'), $('.dream-single-aside').css('top', 0), o.remove())
  //   })),
  //   (window.overlayScrollbarsInstance = a),
  //   $('.dream-flip-toggle').click(function () {
  //     $('.flip-container').toggleClass('flip-it')
  //   })

  $('.dream-flip-toggle').click(function () {
        $('.flip-container').toggleClass('flip-it')
      })


  //  const toc = $('#TableOfContents');
  //   if (toc.length) {

  //     $('#TableOfContents li').each(function() {
  //       if ($(this).children('ul').length >= 1) {
  //         $(this).children('ul').slideToggle();
  //         $(this).toggleClass('collapsed');
  //       }
  //     });

  //     $('#TableOfContents li').click(function(event) {
  //       event.stopPropagation();
  //       if ($(this).children('ul').length >= 1) {
  //         $(this).children('ul').slideToggle();
  //         $(this).toggleClass('collapsed');
  //       }
  //     });

  //       const links = toc.find('a');
  //       if (links.length) {
  //           // create a new Intersection Observer instance
  //           const observer = new IntersectionObserver(els => els.forEach(el => {
  //               const id = el.target.id;
  //               id && el.isIntersecting && links.each(function() {
  //                   const $this = $(this);
  //                   $this.toggleClass('active', $this.attr('href') === '#' + id);
  //               });
  //           }));

  //           // observe all section headings
  //           $('h1,h2,h3,h4,h5,h6').each(function() {
  //               const $this = $(this);
  //               $this[0].nodeType === 1 && observer.observe($this[0]);
  //           });
  //       }
  //   }

})
