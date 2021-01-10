function almostIncreasingSequence(sequence) {
    if(sequence.length >= 2 && sequence.length <= Math.pow(10, 5)){
    	let error = 0

        for(i = 0; i <= sequence.length; i++){
            if(sequence[i] <= sequence[i-1] || sequence[i]<=sequence[i-2] && sequence[i+1]<=sequence[i-1]){
                error++
                if(error > 1 || sequence[i]<=sequence[i-2] && sequence[i+1]<=sequence[i-1]) 
                    return false
            }
        }

       	return true
    }
}


console.log(almostIncreasingSequence([1, 2, 1, 2]))