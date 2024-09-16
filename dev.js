function reverseString(str) {
	return str.split("").reverse().join("");
}

//https://ui.dev/validate-email-address-javascript
function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
	return password.length >= 12;
}

//https://stackoverflow.com/questions/26322867/how-to-validate-password-using-following-conditions
function validatePassword(myPassword) {
	return (
		/[A-Z]/.test(myPassword) &&
		/[a-z]/.test(myPassword) &&
		/[0-9]/.test(myPassword) &&
		/[^A-Za-z0-9]/.test(myPassword) &&
		myPassword.length >= 12
	);
}

console.log(reverseString("SIUM"));
console.log(validateEmail("sium@gmail.com"));
console.log(validatePassword("CoolPassword2?"));
