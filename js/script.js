'use strict';

// Toggle NAv
$('.openNav').click(function () {
  const leftMenu = $('#leftMenu');
  const homeContent = $('#home-content');

  if (leftMenu.width() === 0) {
    leftMenu.animate({ width: '15rem' }, 50);
    homeContent.animate({ marginLeft: '15rem' }, 50);
  } else {
    leftMenu.animate({ width: '0px' }, 50);
    homeContent.animate({ marginLeft: '0px' }, 50);
  }
});

$('.closebtn').click(function () {
  const leftMenu = $('#leftMenu');
  const homeContent = $('#home-content');

  leftMenu.animate({ width: '0px' }, 50);
  homeContent.animate({ marginLeft: '0px' }, 50);
});

// Scroll
$('#leftMenu a').click(function (e) {
  e.preventDefault();
  const sectionId = $(e.target).attr('href');
  const positionOfSection = $(sectionId).offset().top;

  $('html, body').animate(
    { scrollTop: positionOfSection },
    500,
    'easeInOutExpo' // Jquery Plugin
  );
});

// Accordion
$('#sliderDown .toggle').click(function (e) {
  $('.inner').not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});



// counter

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  let timeDifference = futureDate - now;

  const days = Math.floor(timeDifference / (24 * 60 * 60));
  const hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  const mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  const secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $('.days').html(`${days} D`);
  $('.hours').html(`${hours} h`);
  $('.minutes').html(`${mins} m`);
  $('.seconds').html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

window.onload = function () {
  countDownToTime('20 october 2024 22:00:00');
};

// Amount of characters left
const maxLength = 100;
$('textarea').keyup(function (e) {
  const length = $(e.target).val().length;
  const AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $('#chars').text('your available characters finished');
  } else {
    $('#chars').text(AmountLeft);
  }
});
