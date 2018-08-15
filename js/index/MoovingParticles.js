// JavaScript Document
$(function() {
  $('#art').hover(function() {
    $('#art_sparks').css('width', '170px');
	$('#art_sparks').css({'left': 'calc(37% - 85px)'});//.css('left','-=85px');
	$('#art_sparks').css('top', '15px');
  }, function() {
    // on mouseout, reset the background colour
    $('#art_sparks').css('width', '150px');
	$('#art_sparks').css({'left': 'calc(37% - 75px)'});//.css('left','-=75px');
	$('#art_sparks').css('top', '20px');
  });
});

$(function() {
  $('#rob').hover(function() {
    $('.sparks_rob1').css('width', '260px');
	$('.sparks_rob1').css({'left': 'calc(75% - 125px)'});
	$('.sparks_rob1').css('top', '10px');
  }, function() {
    // on mouseout, reset the background colour
    $('.sparks_rob1').css('width', '240px');
	$('.sparks_rob1').css({'left': 'calc(75% - 115px)'});
	$('.sparks_rob1').css('top', '15px');
  });
});
$(function() {
  $('#rob').hover(function() {
    $('.sparks_rob2').css('width', '260px');
	$('.sparks_rob2').css({'left': 'calc(75% - 125px)'});
	$('.sparks_rob2').css('top', '17px');
  }, function() {
    // on mouseout, reset the background colour
    $('.sparks_rob2').css('width', '240px');
	$('.sparks_rob2').css({'left': 'calc(75% - 115px)'});
	$('.sparks_rob2').css('top', '22px');
  });
});

$(function() {
  $('#rob').hover(function() {
    $('.sparks_rob3').css('width', '260px');
	$('.sparks_rob3').css({'left': 'calc(75% - 125px)'});
	$('.sparks_rob3').css('top', '20px');
  }, function() {
    // on mouseout, reset the background colour
    $('.sparks_rob3').css('width', '240px');
	$('.sparks_rob3').css({'left': 'calc(75% - 115px)'});
	$('.sparks_rob3').css('top', '25px');
  });
});