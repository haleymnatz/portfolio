function scrollToId(){
  $('.nav-link').click(function(e) {
    e.preventDefault();
    var divId = '#' + this.dataset.attr;

  	$('body, html').animate({
  		scrollTop: $(divId).offset().top
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

$(function(){
  scrollToId();
  checkSize();
});
