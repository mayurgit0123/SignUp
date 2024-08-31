function validateForm(){

        const name=document.getElementById('fname-input').value;
        const email=document.getElementById('email-input').value;
        const password=document.getElementById('password-input').value;
        const confirm_password=document.getElementById('confirm-password-input').value;
       

        

        const nameError=document.getElementById("fname-error");
        const emailError=document.getElementById("email-error");
        const passwordError=document.getElementById("password-error");
        const confirm_passwordError=document.getElementById("confirm-password-error");
  

        nameError.textContent="";
        emailError.textContent="";
        passwordError.textContent="";
        confirm_passwordError.textContent="";
       

        let isValid=true;
        if(name=== ""|| /\td/.test(name)){
            nameError.textContent="Please Enter a Name";
            isValid= false;
        }
        if(email === "" || !email.includes("@")){
            emailError.textContent="Please Enter a Email";
            isValid= false;
        }

        if(password === "" || password.length < 6){ //Testing193!
            passwordError.textContent="Please Enter a password";
            isValid= false;
        }

        if(confirm_password !== password){
            confirm_passwordError.textContent="Please Enter Confirm Password";
            isValid= false;
        }
       

        if (isValid) {
        alert("Successfully SignUp Thank You!")
        }


        return isValid;  
              
}















