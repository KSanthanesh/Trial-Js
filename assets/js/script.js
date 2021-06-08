function check() {
    name = document.getElementById("name"). value;
    mobile = document.getElementById("number"). value;
    email = document.getElementById("email"). value;

    if (name == "") {
        alert("Please fill the Name");
        return false;
    } else if (mobile == "") {
        alert("Please fill the Mobile Number");
        return false;
    } else if (email == "") {
        alert("Please fill the email address");
        return false;
    } 
}