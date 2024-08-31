
function validateForm(){
    
    const email=document.getElementById('email-input').value;
    const password=document.getElementById('password-input').value;
   

   
    const emailError=document.getElementById("email-error");
    const passwordError=document.getElementById("password-error");
    

    emailError.textContent="";
    passwordError.textContent="";
  

    let isValid=true;
    
    if(email === "" || !email.includes("@")){
        emailError.textContent="Please Enter Your a Email";
        isValid= false;
    }

    if(password === "" || password.length < 6){
        passwordError.textContent="Please Enter Your Password";
        isValid= false;
    }

    if(isValid){
        alert("Sign in Successfully");
    }

    return isValid;

}