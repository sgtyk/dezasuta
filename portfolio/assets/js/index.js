$(function() {
  $('#spBtn, #spNav-link').on('click', function(){
    $('#spNav').fadeToggle();
    $('#spBtn').toggleClass('is-open');
  });
});
