function shapeArea(n) {
	if(n >= 1 && n <= Math.pow(10,4))
		return n*n + (n-1)**2
}

console.log(shapeArea(3))