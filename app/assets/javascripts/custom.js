$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  $('select.dropdown').dropdown();
  $('.ui.radio.checkbox').checkbox();
  $('.ui.checkbox').checkbox();

  if ($('#error_explanation') != '') {
    $('.ui.form').addClass('error');
    $('#error_explanation').addClass('ui error message');
  }

   $('.message.closable .close.icon').on('click', function(){
     $('.message.closable').fadeOut('slow');
   });
});
