



const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElemenrById("lastName")
const email = document.getElementById('email');
const password = document.getElementById("password");
const password2 = document.getElementById("password2");



form.addEventListener("signup", (e) => {
    e.preventDefault();

    checkInput();
} )




function checkInput(){
    //Get the values from the input

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    window.location.href="porter-8.html"


//if the username is empty, there should be an error message


if (firstNameValue === "" ){
        setErrorFor(firstName , "First Name can not be blank" );

}
//else if (firstNameValue.length < 6 ){
 //       setErrorFor(firstName, "First Name must be at least 6 characters long");
//}

else {
        setSuccessFor(firstName);
}

            // Email Validation


if (lastNameValue === ""){
    setErrorFor(lastName, " Last Name field can not be blank");

}
else{
        setErrorFor(lastName);
    
}

if (emailValue === "" ){
    setErrorFor(email , "email can not be blank" );

}
else {
    setSuccessFor(email);
}

            // Password Validation


            if (passwordValue === "" ){
                setErrorFor(password , "password can not be blank" );
        
        }

        else if (passwordValue.length < 8 ){
            setErrorFor(password, "pawword must be at least 8 characters long");
    }

    else {
        setSuccessFor(password);
    }


    // confirm password validation
    
    if (password2Value === "" ){
        setErrorFor(password2 , "Password can not be blank" );


}
    else if(passwordValue !== password2Value ){
        setErrorFor(password2 , "Confirm password mismatch" )
    }

    else{
        setSuccessFor(password2);
    }

}



function setErrorFor(input , message ){
    const formControl = input.parentElement;  // .form-control
    const small = formControl.querySelector("small");


    // add error message inside small

    small.innerText = message;

 // Add error class
 
 formControl.className = "form-control error";


}





function setSuccessFor(input){
    const formControl = input.parentElement;  // .form-control

    // Add success class

    formControl.className = " form-control success ";

}




