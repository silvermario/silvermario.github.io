(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])