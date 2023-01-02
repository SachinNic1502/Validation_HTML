const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

















// const form=document.getElementById('form');
// const username=document.getElementById('username');
// const email=document.getElementById('email');
// const password=document.getElementById('password')
// const re_password=document.getElementById('C_password')

// const btn=document.getElementById('btn');
// if (btn) {
// 	form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });
// }



// const setError=(element,message) => {
// 	const inputControl=element.parentElement;
// 	const errorDisplay=inputControl.querySelector('.error');

// 	errorDisplay.innerText=message;
// 	inputControl.classList.add('error');
// 	inputControl.classList.remove('sucess')
// }
// const setSucess=(element,message) => {
// 	const inputControl=element.parentElement;
// 	const errorDisplay=inputControl.querySelector('.sucess');

// 	errorDisplay.innerText='';
// 	inputControl.classList.add('sucess');
// 	inputControl.classList.remove('error')
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = ()=>{
// 	const username_val=username.value.trim();
// 	const email_val=email.value.trim();
// 	const password_val=password.value.trim();
// 	const re_password_val=re_password.value.trim(); 
	
// 	if(username_val==''){
// 		setError(username,"User_name is Required")
// 	}else {
// 		setSucess(username);
// 	}
// 	if(email_val==''){
// 		setError(email,"Email is Required")
// 	}else if (!isValidEmail(email_val)) {
// 		setError(email,"Plase Enter Correct Email Address ?")
// 	}else {
// 		setSucess(email);
// 	}



// 	if(password_val==''){
// 		setError(password,"Password is Required")
// 	}else if (password_val.length<8) {
// 		setError(email,"Password must be grater than 8 char!");
// 	} else{
// 		setSucess(password);
// 	}

// 	if(re_password_val==''){
// 		setError(re_password,"Repassword is Required")
// 	}else if (re_password_val==password_val) {
// 		setError(re_password,"Password does not match")
// 	} else {
		
// 	}{
// 		setSucess(re_password);
// 	}
// }