 var nameError = document.getElementById("name-error");
 var emailError = document.getElementById("email-error");
 var phoneError = document.getElementById("phone-error");
 var messageError = document.getElementById("message-error");
 var submitError = document.getElementById("submit-error");

 function validateName(){

    var name=document.getElementById("contact-name").value
    if(name.length == 0){
        nameError.innerHTML='Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write your fullname'
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: rgb(23, 228, 125);"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value

    if( phone.length ==0){
        phoneError.innerHTML='phone no is required'
        return false;
    }
    if(!phone.match(/[0-9]$/)){
        phoneError.innerHTML='only digits'
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML='phone no should be 10 digits'
        return false;
    }

    phoneError.innerHTML='<i class="fa-solid fa-circle-check" style="color: rgb(23, 228, 125);"></i>';
    return true;
}



function validateEmail(){
    
    var email =document.getElementById("contact-email").value;
    
    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(email.match('@gmail.com')){
        
        emailError.innerHTML='<i class="fa-solid fa-circle-check" style="color: rgb(23, 228, 125);"></i>';
        return true;
    }
}


function validateMessage(){
    var message =document.getElementById("contact-message").value;
     let req=30;
     let exist = req - message.length;

    if(exist >0){
        messageError.innerHTML=exist + ' characters required'
        return false;
    }
    
    messageError.innerHTML='<i class="fa-solid fa-circle-check" style="color: rgb(23, 228, 125);"></i>';
    return true;
}

function validateForm(){
    if(!validateName()|| !validateEmail() || !validatePhone() || !validateMessage()){
        // submitError.style.display='block'
        submitError.innerHTML='please fix the mistakes to submit';
        setTimeout(function(){submitError.style.display='none';},8000);
        return false;
    }
}