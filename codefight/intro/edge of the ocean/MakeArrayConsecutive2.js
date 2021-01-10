const makeArrayConsecutive2 = (sequence) => Math.max(...sequence)-Math.min(...sequence)+1-sequence.length



console.log(makeArrayConsecutive2([6, 2, 3, 8]))