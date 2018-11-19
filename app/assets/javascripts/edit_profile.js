$(document).on('turbolinks:load', function () {
  function checkStrengthPassword(password) {
    var strength = 0;

    if (password.length < 6) {
      return 0;
    }

    if (password.length > 6) strength += 1;

    //If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;

    //If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;

    //If it has one special character, increase strength value.
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;

    //if it has two special characters, increase strength value.
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;

    return strength;
  }

  function checkPasswordLength() {
    var password = $("#profile_change_password").val();
    var size_of_password = password.length;

    if (size_of_password === 0) {
      $("#InforCheckPasswordLength").hide();
      $("#InforCheckPasswordLengthError").hide();
      $("#show-message-password").hide();
      return;
    }

    if (size_of_password >= 8) {
      $("#InforCheckPasswordLength").show();
      $("#InforCheckPasswordLengthError").hide();
    }
    else {
      $("#InforCheckPasswordLength").hide();
      $("#InforCheckPasswordLengthError").show();
    }

    var strength = checkStrengthPassword(password);

    if (strength < 2) {
      $("#show-message-password").html("<br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Password Strength : <b>Weak</b>");
      $("#show-message-password").css("color", "blue");
      $("#show-message-password").show();
    }
    if (strength === 2) {
      $("#show-message-password").html("<br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Password Strength : <b>Good</b>");
      $("#show-message-password").css("color", "blue");
      $("#show-message-password").show();
    }
    if (strength > 2) {
      $("#show-message-password").html("<br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Password Strength : <b>Strong</b>");
      $("#show-message-password").css("color", "green");
      $("#show-message-password").show();
    }
  }

 function checkLostFocusPasswordBox() {
    var password = $("#profile_change_password").val();
    var size_of_password = password.length;

    if (size_of_password >= 8) {
      $("#show-message-password").html("<br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Your password : " + "<b>" + password + "</b>");
      $("#show-message-password").css("color", "green");

      $("#show-message-password").show();
      $("#show-message-password").fadeOut(6000);
    }
    else {
      $("#show-message-password").hide();
    }
  }

  function checkPasswordMatch() {
    var password = $("#profile_change_password").val();
    var confirmPassword = $("#profile_password_confirmation").val();

    if (confirmPassword.length === 0) {
      $("#InforCheckPasswordMatch").hide();
      $("#InforCheckPasswordError").hide();
      return;
    }

    if ((password === confirmPassword) && (password.length > 0)) {
      $("#InforCheckPasswordMatch").show();
      $("#InforCheckPasswordError").hide();
    }
    else {
      $("#InforCheckPasswordMatch").hide();
      $("#InforCheckPasswordError").show();
    }
  }

  function checkNameLength() {
    var name = $("#name").val();
    var size_of_name = name.length;

    if (size_of_name > 0) {
      $("#show-message-name").hide();
    }
    else {
      $("#show-message-name").show();
    }
  }

  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  function checkFormatEmail() {
    var mail = $("#email").val();

    var length_email = mail.length;

    if (length_email === 0) {
      $("#show-message-email").show();
      return;
    }

    if (!isValidEmailAddress(mail)) {
      $("#show-message-email").html("<br/>Wrong format email, please enter again.");
      $("#show-message-email").css("color", "red");
      $("#show-message-email").show();
      return;
    }
    else {
      $("#show-message-email").hide();
    }
 }

  function checkAllFields() {
    var name = $("#name").val();
    var mail = $("#email").val();
    var current_password = $("#profile_current_password").val();

    if (name.length === 0) {
      $("#show-message-name").show();
    }
    else {
      $("#show-message-name").hide();
    }

    if (mail.length === 0) {
      $("#show-message-email").show();
    }
    else {
      $("#show-message-email").hide();
    }

    if (current_password.length === 0) {
      $("#show-message-current_password").show();
    }
    else {
      $("#show-message-current_password").hide();
    }
  }

  $(document).ready(function () {

    $("#InforCheckPasswordMatch").hide();
    $("#InforCheckPasswordError").hide();

    $("#InforCheckPasswordLength").hide();
    $("#InforCheckPasswordLengthError").hide();

    $("#show-message-password").hide();

    $("#profile_change_password").keyup(checkPasswordLength);
    $("#profile_change_password").focusout(checkLostFocusPasswordBox);

    $("#profile_password_confirmation").keyup(checkPasswordMatch);
    $("#profile_password_confirmation").focusout(checkAllFields);

    $("#name").focusout(checkNameLength);

    $("#email").focusout(checkFormatEmail);

    checkAllFields();
  });
});
