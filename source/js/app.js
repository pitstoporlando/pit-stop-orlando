// JavaScript
window.sr = ScrollReveal();

sr.reveal('h1', {
    delay: 500,
    easing:'ease',
    scale:'1',
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
}),
sr.reveal('.logo-hero', {
    delay: 1000,
    easing:'ease',
    scale:'1',
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
}),
sr.reveal('.wrapper-description p', {
    delay: 500,
    easing:'ease',
    scale:'1',
    duration: 2000,
    origin: 'bottom'
}),
sr.reveal('.offer h2', {
    delay: 500,
    easing:'ease',
    scale:'1',
    duration: 1500,
    origin: 'right',
    distance: '80px'
}),
sr.reveal('.offer p', {
    delay: 1000,
    easing:'ease',
    scale:'1',
    duration: 1500,
    origin: 'right',
    distance: '80px'
}),
sr.reveal('#faq p', {
    delay: 500,
    easing:'ease',
    scale:'1',
    duration: 2000,
    origin: 'bottom'
})
sr.reveal('.cell', {
    delay: 500,
    easing:'ease',
    scale:'1',
    duration: 2000,
    origin: 'bottom'
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });

// menu responsive
$('.menu-bars').on('click', function() {
  $('.overlay').toggleClass('active')
})
$('.close-menu').on('click', function() {
  $('.overlay').removeClass('active')
})
$('.overlay li a').on('click', function() {
  $('.overlay').removeClass('active')
})
