//signup.js
// add your JavaScript code to this file

$(function() {
    var stateSelect = $("select.us-states");

    $(usStates).each(function(i, val) {
        var element = document.createElement("option");
        var option = $(element);
        option.attr("value", val.abbreviation);
        option.html(val.name);

        stateSelect.append(option);
    });

    $(".signup-form").submit(function() {
        var signupForm = $(this);
        
        if (signupForm.find("input[name='addr-1']").val().length != 0) {
            if (signupForm.find("input[name='zip']").val().length == 0) {
                alert("Enter a zip number for your address...");
                return false;
            }
        }

        //find the input with name="first-name" and get its trimmed value
        var firstName = signupForm.find('input[name="first-name"]').val().trim();
        if (0 === firstName.length) {
            alert('You must enter a first name!');
            return false;
        }
        
        //find the input with name="last-name" and get its trimmed value
        var lastName = signupForm.find('input[name="last-name"]').val().trim();
        if (0 === lastName.length) {
            alert('You must enter a last name!');
            return false;
        }

        //find the input with name="email" and get its trimmed value
        var email = signupForm.find('input[name="email"]').val().trim();
        if (0 === email.length) {
            alert('You must enter an email!');
            return false;
        }

    });

    $(".cancel-signup").click(function() {
        //code to run when user clicks "No Thanks!" button
        window.location = "http://www.google.com";
    });

});
