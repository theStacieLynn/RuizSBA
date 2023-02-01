

function validateForm() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("emailID").value;
	let password = document.getElementById("password").value;
	let cPassword = document.getElementById("cPassword").value;
	
	if(name==""){
		alert("Please enter username");
		return false;
	}
	if(email==""){
		alert("Please enter email");
		return false;
	}
	if(email!=""){
		if(validateEmail()==false){
			alert("please enter correct email format");
			return false;
		}
	}
	if(password==""){
		alert("Please enter password");
		return false;
	}
	if(cPassword==""){
		alert("Please confirm password");
		return false;
	}
	if(password!=cPassword){
		alert("Passowrds do not match");
		return false;
	}
	document.write("Thank you for signing up!")
}
function validateEmail() {
	let eID = document.getElementById("emailID").value;
	let atPos = eID.indexOf("@");
	let dotPos = eID.lastIndexOf(".");
	if (atPos < 1 || (dotPos - atPos < 2)) {
		return false;
	} else {
		return true;
	}
}
function addData(){
	 let contactDetails ={Name: document.getElementById("NAME").value,
	 Email: document.getElementById("emailID").value,
	 Phone: document.getElementById("PhoneID").value,
	 Contact: document.getElementById("contactTypeID").value};
	 printContactInfo(contactDetails);
 }
 function printContactInfo(p){
	 document.write("Thank you we will contact you shortly <br>")
	 for(let o in p)
	 document.write(o+": "+p[o]+"<br>");
 }










