$(document).ready(function () {
    $('#loginFrm').show();
    $('#signupFrm').hide();

    $('#signUpBtn').click(function () {
        var title = $('#title').val();
        var fName = $('#fName').val();
        var lName = $('#lName').val();
        var email = $('#email').val();
        var pswd = $('#pswd').val();
        var mobile = $('#mobile').val();

        if (title == "" || fName == "" || lName == "" || email == "" || pswd == "" || mobile == "") {
            window.alert("Please enter the details,");
            return;
        }

        var myParams = {
            title: title,
            fName: fName,
            lName: lName,
            email: email,
            pswd: pswd,
            mobile: mobile
        }

        doSignup(myParams);
    })

    $('#goToLogin').click(function () {
      
        var title = $('#title').val("Mr.");
        var fName = $('#fName').val("");
        var lName = $('#lName').val("");
        var email = $('#email').val("");
        var pswd = $('#pswd').val("");
        var mobile = $('#mobile').val("");

        $('#loginFrm').show();
        $('#signupFrm').hide();
    })

    $('#goToSignup').click(function () {

        var email = $('#loginEmail').val("");
        var pswd = $('#loginPswd').val("");

        $('#loginFrm').hide();
        $('#signupFrm').show();
    })

    $('#loginBtn').click(function () {
        var email = $('#loginEmail').val();
        var pswd = $('#loginPswd').val();

        if (email == "" || pswd == "") {
            window.alert("Please enter the details.");
            return;
        }

        var myParams = {
            email: email,
            password: pswd
        }

        doLogin(myParams);
    })

    function doLogin(myParams) {
        if (myParams == null || typeof (myParams) === 'undefined') {
            window.alert("Something went wrong. Please try again later.");
            return;
        }

        $.ajax({
            url: "your web api url",
            type: 'POST',
            data: JSON.stringify(myParams),
            contentType: 'application/json; charset=utf-8',
            success: function (jResponse) {
               // Handle your response
            },
            error: function (jError) {
                // Handle your error
            }
        });
    }

    function doSignup(myParams) {
        if (myParams == null || typeof (myParams) === 'undefined') {
            window.alert("Something went wrong. Please try again later.");
            return;
        }
        $.ajax({
            url: "your web api url",
            type: 'POST',
            data: JSON.stringify(myParams),
            contentType: 'application/json; charset=utf-8',
            success: function (jResponse) {
               // Handle your response
            },
            error: function (jError) {
                // Handle your error
            }
        });
    }
});