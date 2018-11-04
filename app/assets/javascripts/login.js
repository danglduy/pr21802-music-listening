$(document).on('turbolinks:load', function () {
  
  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  function checkFormatEmail() {
    var mail = $('#user_email_login').val();

    var length_email = mail.length;

    if (length_email === 0) {
        $('message-for-email-login').hide();
        return;
    }

    if (!isValidEmailAddress(mail)) {
        $("#message-for-email-login").html("<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Wrong format email, please enter again.");
        $("#message-for-email-login").css("color", "red");
        $("#message-for-email-login").show();
        return;
    }

    var user = {email: mail};

    var response = -1;
    $.ajax({
        type: "GET",
        url: "/check-user",
        data: user,
        async: false,
        success: function (text) {
          response = parseInt(text);
        }
    });

    if (response === 0) {
      $('#message-for-email-login').html("<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This email is unregistered, please sign up.");
      $('#message-for-email-login').css("color", "red");
      $('#message-for-email-login').show();
    } else {
      $('#message-for-email-login').hide();
    }
  }

  $(document).ready(function () {
    $('#user_email_login').focusout(checkFormatEmail);
    $('#user_password_login').focusout(checkFormatEmail);
    $('#message-for-email-login').hide();
  });
});
