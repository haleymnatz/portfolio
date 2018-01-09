// function getNav(){
//   $(".nav-placeholder").load('../html/nav.html');
// }

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
    $('main').load('../html/work.html', function(){
      // alert("Success!");
      // history.pushState({"html":response.html,"pageTitle":response.pageTitle}, '', 'work');
    });
  });
}

// function getWork(){
//   $('#work-link').click(function(){
//     $.get('/html/work.html', function(data) {
//
//     });
//   });
// }

function openAbout(){
  $('#about-link').click(function(){
    $('main').load('../html/about.html');
  });
}

$(function(){
  // getNav();
  // openContact();
  // openHome();
  // openWork();
  // openAbout();
});
