function adjacentElementsProduct(inputArray) {
	let n = Number.NEGATIVE_INFINITY

	if(inputArray.length >= 2 && inputArray.length <= 10){
		for(let i = 0; i < inputArray.length-1; i++){
			if(inputArray[i] * inputArray[i + 1] > n)
				n = inputArray[i] * inputArray[i + 1]
		}
		return n
	}
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))