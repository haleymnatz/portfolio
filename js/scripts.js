function openContact(){
  $('#contact-link').click(function(){
    $('main').load('../html/contact.html');
  });
}

function openHome(){
  $('#home-link').click(function(){
    $('main').load('../html/index.html #home');
  });
}

function openWork(){
  $('#work-link').click(function(){
    $('main').load('../html/work.html');
  });
}

function openAbout(){
  $('#about-link').click(function(){
    $('main').load('../html/about.html');
  });
}

$(function(){
  openContact();
  openHome();
  openWork();
  openAbout();
});
