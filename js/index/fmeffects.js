// JavaScript Document
$(function() {
  $('#fm_in').hover(function() {
    $(this).css('width', '50px');
	$(this).css('margin-left', '139px');
	$(this).css('margin-top', '10px');
  }, function() {
    // on mouseout, reset the background colour
    $(this).css('width', '40px');
	$(this).css('margin-left', '144px');
	$(this).css('margin-top', '15px');
  });
});

$('#fm_in').click(function(e){
    e.preventDefault();
	window.open('https://www.linkedin.com/in/antoine-richard-32429a122/');
});
	
$(function() {
  $('#fm_dev').hover(function() {
    $(this).css('width', '50px');
	$(this).css('margin-left', '169px');
	$(this).css('margin-top', '55px');
  }, function() {
    // on mouseout, reset the background colour
    $(this).css('width', '40px');
	$(this).css('margin-left', '174px');
	$(this).css('margin-top', '60px');
  });
});
$(function() {
  $('#fm_yt').hover(function() {
    $(this).css('width', '50px');
	$(this).css('margin-left', '155px');
	$(this).css('margin-top', '103px');
  }, function() {
    // on mouseout, reset the background colour
    $(this).css('width', '40px');
	$(this).css('margin-left', '160px');
	$(this).css('margin-top', '108px');
  });
});
$(function() {
  $('#fm_git').hover(function() {
    $(this).css('width', '97px');
	$(this).css('margin-left', '0px');
	$(this).css('margin-top', '5px');
  }, function() {
    // on mouseout, reset the background colour
    $(this).css('width', '77px');
	$(this).css('margin-left', '10px');
	$(this).css('margin-top', '15px');
  });
});
$(function() {
  $('#fm_cv').hover(function() {
    $(this).css('width', '130px');
	$(this).css('margin-left', '10px');
	$(this).css('margin-top', '103px');
  }, function() {
    // on mouseout, reset the background colour
    $(this).css('width', '100px');
	$(this).css('margin-left', '25px');
	$(this).css('margin-top', '118px');
  });
});
