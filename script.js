//Prevent resubmit on refresh and back button
	if(window.history.replaceState){
		window.history.replaceState(null,null,window.location.href);
	}
	let image=document.getElementById('image');
	let fname=document.getElementById('firstname');
	let lname=document.getElementById('lastname');
	let email=document.getElementById('email');
	let mob=document.getElementById('mob');
	let dob=document.getElementById('dob');
	let password=document.getElementById('password');
	let state=document.getElementById('state');
	let experience=document.getElementById('exp');
	let gender=document.querySelector('input[name="gender"]:checked');
	let intAreas=document.getElementById('area-int');
	let qual=document.getElementById('qualifications');
	let terms=document.getElementById('terms');
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
	let fieldError=document.getElementById('int-error');
	let qualError=document.getElementById('qual-error');
	let termError=document.getElementById('term-error');	
	let submitError=document.getElementById('submit-error');

	//Check form empty fields and Input patterns
	function validateImg(){
		let img=image.value;
		let file=image.files[0];
		const maxSize=2*1024*1024;
		let allowedExtensions=/(\.jpg|\.jpeg|\.png|\.gif)$/i;
		if(!image.files || image.files.length===0){
			imgError.innerHTML="*Please upload your image";
			return false;
		}
		else if(!allowedExtensions.exec(img)){
			imgError.innerHTML="*Only jpg, jpeg, png, gif formats are supported";
			img='';	
			return false;
		}
		else if(file.size>maxSize){
			imgError.innerHTML="*Image size can not exceed more than 2MB";
			img='';
			return false;
		}
		else{
			imgError.innerHTML="";
		}
	}
	function validateFname(){
		if(fname.value.length===0){
			fnameError.innerHTML="*Please enter your first name";
			fname.scrollIntoView({ behavior: 'smooth', block: 'center' });
			return false;
		}
		else if(!fname.value.match(/^[A-Za-z]+(\s[A-Za-z]+)?$/)){
			fnameError.innerHTML="*Please enter a valid firstname";
			return false;
		}
		else{
			fnameError.innerHTML="";
			return true;
		}
	}
	function validateLname(){
		if(lname.value.length===0){
			lnameError.innerHTML="*Please enter your last name";
			return false;
		}
		else if(!lname.value.match(/^[A-Za-z]+(\s[A-Za-z]+)?$/)){
			lnameError.innerHTML="*Please enter a valid last name";
			return false;
		}
		else{
			lnameError.innerHTML="";
			return true;
		}
	
	}
	function validateEmail(){
		if(email.value.length===0){
			emailError.innerHTML="*Please enter your email";
			return false;
		}
		else if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
			emailError.innerHTML="*Please enter a valid email";
			return false;
		}
		else{
			emailError.innerHTML="";
			return true;
		}	
	}	
	function validateMob(){
  		if(mob.value.length===0){
			mobError.innerHTML="*Please enter your mobile number";
			return false;
		}
		else if(!mob.value.match(/^[6-9]\d{9}$/)){
			mobError.innerHTML="*Please enter a valid mobile number";
			return false;
		}
		else{
			mobError.innerHTML="";
			return true;
		}
	}
	function validateDob(){
		let date=dob.value.split('-').reverse().join('-');
		if(dob.value.length===0){
			dobError.innerHTML="*Please enter your date of birth";
			return false;
		}
		else if(!date.match(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/)){
			dobError.innerHTML="Please enter a valid date of birth";
			return false;
		}
		else{
			dobError.innerHTML="";
			return true;
		}	
	}
	function validatePassword(){
		if(password.value.length===0){
			passwordError.innerHTML="*Please enter your password";
			return false;
		}
		else if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
			passwordError.innerHTML="*Please enter a valid password";
			return false;
		}
		else{
			passwordError.innerHTML="";
			return true;
		}
	}
	function validateState(){
		if(state.value.length===0){
			stateError.innerHTML="*Please enter your state";
			return false;
		}
		else{
			stateError.innerHTML="";
			return true;	
		}
	}
	function validateExp() {
		let experience = exp.value;
		if (experience.length === 0) {
			expError.innerHTML = "*Please enter your experience in years";
			return false;
		} 
		else if (isNaN(experience) || experience < 0 || !Number.isInteger(Number(experience))) {
			expError.innerHTML = "*Please enter a valid number for years of experience";
			return false;
		} 
		else {
			expError.innerHTML = "";
			return true;
		}
	}
	function validateGender() {
		let male = document.getElementById("male");
		let female = document.getElementById("female");
		if (male.checked){
			genderError.innerHTML = "";
			return true;
		} 
		else if(female.checked){
			genderError.innerHTML = "";
			return true;
		}else{
			genderError.innerHTML = "Gender Should be specified";
			return false;
		}
	}
	function validateIntArea(){
		if(intAreas.value.length===0){
			fieldError.innerHTML="Please enter your interests";
			return false;
		}
		else{
			fieldError.innerHTML="";
			return true;
		}	
	}
	function validateQual(){
		if(qual.value.length===0){
			qualError.innerHTML="*Please Enter your qualificaion";
			return false;
		}
		else{
			qualError.innerHTML="";
			return true;
		}
	}
	function validateTerms(){
		if(!terms.checked){
			termError.innerHTML="*Please accept the rules";
			return false;
		}
		else{
			termError.innerHTML="";
			return true;
		}
	}
	
	//FORM SUBMISSION
	function validateForm(event){
		event.preventDefault();
		let invalidInputs=[];

	//Check empty input fields
		if(!validateImg()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateFname()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateLname()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateEmail()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateMob()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateDob()){
			submitError.innerHTML="Complete the form";
		}
		if(!validatePassword()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateState()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateExp()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateGender()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateIntArea()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateQual()){
			submitError.innerHTML="Complete the form";
		}
		if(!validateTerms()){
			submitError.innerHTML="Complete the form";
		}
		setTimeout(()=>{
			submitError.innerHTML="";
		},5000);
							
	}





	
		