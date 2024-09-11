//Prevent resubmit on refresh and back button
	if(window.history.replaceState){
		window.history.replaceState(null,null,window.location.href);
	}

	let fname=document.getElementById('firstname');
	let lname=document.getElementById('lastname');
	let email=document.getElementById('email');
	let mob=document.getElementById('mob');
	let dob=document.getElementById('dob');
	let password=document.getElementById('password');
	let state=document.getElementById('state');
	let experience=document.getElementById('exp');
	let gender=document.querySelector('input[name="gender"]:checked');
	let interestedFieldValues=document.querySelectorAll('input[name="area of interest"]:checked');
	let interestedAreas=[];
	interestedFieldValues.forEach((area)=>{
		interestedAreas.push(area.value);
	});
	let qualifications=document.getElementById('qualifications');

	let imgError=document.getElementById('img-error');
	let fnameError=document.getElementById('fname-error');
	let lnameError=document.getElementById('lname-error');
	let emailError=document.getElementById('email-error');
	let mobError=document.getElementById('mob-error');
	let dobError=document.getElementById('dob-error');
	let passwordError=document.getElementById('password-error'); 
	let stateError=document.getElementById('state-error');
	let expError=document.getElementById('exp-error');
	let genderError=document.getElementById('gender-error');
	let fieldError=document.getElementById('int-area-error');
	let qualError=document.getElementById('qualification-error');	

//Check form empty fields and Input patterns
	function validateFname(){
		if(fname.value.length===0){
			fnameError.innerHTML="*Please enter your first name";
			event.preventDefault();
		}
		else if(!fname.value.match(/^[A-Za-z]+(\s[A-Za-z]+)?$/)){
			fnameError.innerHTML="*Please enter a valid firstname";
			event.preventDefault();
		}
		else{
			fnameError.innerHTML="";
		}
	}
	function validateLname(){
		if(lname.value.length===0){
			lnameError.innerHTML="*Please enter your last name";
			event.preventDefault();
		}
		else if(!lname.value.match(/^[A-Za-z]+(\s[A-Za-z]+)?$/)){
			lnameError.innerHTML="*Please enter a valid last name";
			event.preventDefault();
		}
		else{
			lnameError.innerHTML="";
		}
	
	}
	function validateEmail(){
		if(email.value.length===0){
			emailError.innerHTML="*Please enter your email";
		}
		else if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
			emailError.innerHTML="*Please enter a valid email";
		}
		else{
			emailError.innerHTML="";
		}	
	}	
	function validateMob(){
  		if(mob.value.length===0){
			mobError.innerHTML="Please enter your mobile number";
		}
		else if(mob.value.match(/^[6-9]\d{9}$/)){
			mobError.innerHTML="Please enter a valid mobile number";
		}
		else{
			mobE
		}
	}







	
		