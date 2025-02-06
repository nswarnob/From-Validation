var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messgeError = document.getElementById('message-error');
var submiteError = document.getElementById('submite-error');



function validateName(){
    var name = document.getElementById('fullname').value;

    if(fullname.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!fullname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML = 'Write full name';
            return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}