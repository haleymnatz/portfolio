function scrollToId(){
  $('.nav-link').click(function(e) {
    e.preventDefault();
    var divId = '#' + this.dataset.attr;

  	$('body, html').animate({
  		scrollTop: $(divId).offset().top
  	}, 500);
  });
}

$(function(){
  scrollToId();
});
