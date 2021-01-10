function checkPalindrome(inputString) {
	if(inputString.length >= 1 || inputString <= Math.pow(10,5)){
		let newString = inputString.split('').reverse().join('')

		return(inputString == newString) ? true : false
	}
	else return 'error'
}

console.log(checkPalindrome("arara"))