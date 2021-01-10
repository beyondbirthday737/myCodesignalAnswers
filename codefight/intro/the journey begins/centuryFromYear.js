function centuryFromYear(year) {
    if(year >= 1 && year <= 2005){
    	if(year % 100 == 0)
    		return year / 100
    return Math.floor((year / 100) + 1)
    }
}

console.log(centuryFromYear(2005))