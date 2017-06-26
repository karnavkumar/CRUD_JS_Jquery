// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='myForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      number: "required",
      city: "required",
      hobby: "required",
      birthdate :"required",
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your firstname",
      number: "Please enter your number",
      city: "please select city",
      hobbby: "please check atleast one hobby",
      birthdate:"please mention your birthdate"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});