$('#nav-slide').hide();
$('.acc-body').hide();

/*********************************
 * Open Slide Menu
 *********************************/
$('#slideNav-toggler').click(() => {
  $('#slideNav-toggler').hide();
  $('#nav-slide').animate(
    {
      paddingBottom: '48px',
      paddingLeft: '48px',
      paddingRight: '48px',
    },
    500
  );
  $('#nav-slide').show(500);

  if ($(window).innerWidth() >= 1200) {
    $('#nav-slide').css({ width: 'auto' });
  } else {
    $('#nav-slide').css({ width: '100%', height: 'auto' });
    $('#nav-slide').animate({ width: '100%' }, 500);
  }
});
/*********************************
 * Close Slide Menu
 *********************************/
$('#btn-close').click(() => {
  $('#nav-slide').hide(500);
  $('#slideNav-toggler').show(1000);
  if ($(window).innerWidth() >= 1200) {
    $('#nav-slide').animate({ padding: '0' }, 500);
  } else {
    $('#nav-slide').animate({ height: '0', padding: '0' }, 500);
  }
});

/*********************************
 * Accordion
 *********************************/
$('.toggle').click(function (e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
    $this.next().removeClass('show');
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find('li .inner').removeClass('show');
    $this.parent().parent().find('li .inner').slideUp(350);
    $this.next().toggleClass('show');
    $this.next().slideToggle(350);
  }
});

/*********************************
 * Countdown
 *********************************/
const partyDateString = $('time').attr('dateTime');
const partDateObj = new Date(partyDateString);

setInterval(function () {
  const now = new Date().getTime();
  const partydate = partDateObj.getTime();
  const difference = partydate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  $('#time-days').text(days);
  $('#time-hours').text(hours);
  $('#time-minutes').text(minutes);
  $('#time-seconds').text(seconds);
}, 1000);

/*********************************
 * Contact Us
 *********************************/
$('#message').on('input', function () {
  const availableChars = 100 - $('#message').val().length;
  $('#remaining-chars').text(availableChars);
  if (availableChars === 0) {
    $('#remaining-chars-message').text("You Don't Have Any Characters Left");
    $('#remaining-chars-message').addClass('fw-bold text-crimson');
  }
});
