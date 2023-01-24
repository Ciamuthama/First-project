function validate() {
    var pass = document.getElementById('password').value;
    var pass2 = document.getElementById('confirmPassword').value;

    if (pass==pass2 ) {
        return true;
    } 
    alert("make sure your passwords match");
    }

document.querySelectorAll