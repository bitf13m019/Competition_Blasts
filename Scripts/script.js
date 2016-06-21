
function checkEmail(){
    var serviceURL = '/Home/verifyEmail';
    alert("Going");

    $.ajax({
        type: "Post",
        url: serviceURL,
        success: successFunc,
        error: errorFunc
    });

    function successFunc(data) {
        alert("Hello World");
        alert("Data gotted");
    }

    function errorFunc(xhr, status, err) {
        alert('error');
    }
    alert("Back");
}

function checkEmailLogin() {
    var serviceURL = '/Home/verifyEmail';
    alert("Going");

    $.ajax({
        type: "Post",
        url: serviceURL,
        success: successFunc,
        error: errorFunc
    });

    function successFunc(data) {
        alert("Hello World");
        var em = $("#email").val();
        alert("E-mail is: " + em);
        var count = data.length;
        for (var i = 0; i < count; i++) {
            var v = "<p>" + data[i] + "</p>";
            $("#insert").append(v);
            alert(data[i]);
            if (data[i] === em) {
                alert("Match Found");
                var sURL = '/Home/LoginProfile?email=' + em;
                window.location.href = sURL;
                break;
            }
        }
    }

    function errorFunc(xhr, status, err) {
        alert('error');
    }
    alert("Back");
}
function validateLogin()
{
	var flag = true;
	var p = document.loginForm.Password.value;
	var e = document.loginForm.email.value;
	if( p.length < 5 || p.length > 49)
	{
		alert( "Password Length is not Valid!" );
		flag=false;
	}
	return flag;
}




function validateSignUp()
{
	var flag = true;
	var p = document.signUpForm.Password.value;
	var p1 = document.signUpForm.pass1.value;
	var m = document.signUpForm.mobile.value;
	if( m.length < 11 || p.length > 13)
	{
		alert( "Please provide Valid Phone Number!" );
		flag=false;
	}
	else if( p.length < 5 || p.length > 49)
	{
		alert( "Password Length is not Valid!" );
		flag=false;
	}
	else if( p1.length < 5 || p1.length > 49)
	{
		alert( "Password Length is not Valid!" );
		flag=false;
	}
	else if(p!=p1)
	{
		alert( "Your Provided Password does not Match!" );
		flag=false;
	}
	if (flag == true)
	    checkEmail();

	return flag;
}



