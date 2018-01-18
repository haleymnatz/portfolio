function scrollToId(){
  $('.nav-link').click(function(e) {
    e.preventDefault();
    var divId = '#' + this.dataset.attr;

    if ($(window).width() <= 730) {
      var scrollHere = $(divId).offset().top - 50;
    } else {
      scrollHere =  $(divId).offset().top;
    }
  	$('body, html').animate({
  		scrollTop: scrollHere
  	}, 500);
  });
}

function checkSize () {
  $('#nav-trigger').click(function() {
    if ($(window).width() <= 730) {
      darkenContent();
    }
  });
}


function darkenContent() {
  var checked = $('#nav-trigger').prop('checked');
  $('#site-cover-div').toggleClass('site-cover', checked);
}

function revealInfoDirectClick() {
  if ($(window).width() <= 730) {
    $('.project').click(function() {
      $(this).toggleClass('open');
    });
  }
}

function revealInfoFromDots() {
  $('.fa-ellipsis-v').click(function(){
    $(this).parent().parent().siblings('.project').toggleClass('open');
  });
}

function closeMobileMenu() {
  $('.nav-lists a').click(function(){
    $('#nav-trigger').prop('checked', false);
    darkenContent();
  });
}

$(function(){
  scrollToId();
  checkSize();
  revealInfoFromDots();
  revealInfoDirectClick();
  closeMobileMenu();
});
