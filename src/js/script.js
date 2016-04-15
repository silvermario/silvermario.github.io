// Add scrollspy to <body>
$('body').scrollspy({
  target: '.navbar-fixed-top'
});

// add smooth scrolling
$('a.page-scroll').on('click', function(event) {
  event.preventDefault();

  //store the hash
  var hash = this.hash;

  //animate scroll
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 700, 'easeInOutExpo', function() {
    window.location.hash = hash;
  });

  //console.log(this.hash);
});

// change the navbar on scroll

$(document).ready(function() {

  $(document).scroll(function(e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
      //console.log(scrollTop);
    }
  })
});

function scroll() {
  var scrollTopp = $(document).scrollTop();
  if (scrollTopp > 100) {
    console.log(scrollTopp);
  } else {
    console.log(scrollTopp);
  }
}

//window.onscroll = scroll;

$(document).scroll(function() {
  //scroll()
  var scrollPosition = $(document).scrollTop();
  if (scrollPosition > 100) {
    $('nav.navbar').addClass('navbar-shrink');
  } else {
    $('nav.navbar').removeClass('navbar-shrink');
  }
});