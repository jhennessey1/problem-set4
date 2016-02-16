// #1, Can't get to work yet...
// var addNumbers = function(str) {
// 	var arr = str.split('')
// 	var newNum = []
// 	var newNums = []
// 	for(var i = 0; i < arr.length; i++){
// 		if(!isNaN(arr[i] * 1)){
// 			newNum.push(arr[i])
// 			console.log(newNum)
// 		}
// 		else if(isNaN(arr[i] * 1)){
// 			newNums.push(newNum.join('') * 1)
// 			newNum = []
// 		}
// 		else if(i + 1 === arr.length){
// 			newNums.push(newNum.join('') * 1)
// 			newNum = []
// 		}
// 	}
// 	console.log(newNums)
// }

// addNumbers('8e84')


//#2, completed, though I got the str.replace code from stackoverflow
// var longestWord = function(str) {
// 	str = str.replace(/[^\w\s]|_/g, "")
//          .replace(/\s+/g, " ");
// 	var arr = str.split(' ')
// 	var longestWord = ''
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i].length > longestWord.length){
// 			longestWord = arr[i]
// 		}
// 	}
// 	return longestWord
// }


// Bonus, no problem
// var averageStringNumbers = function(str) {
// 	arr = str.split('')
// 	numbers = []
// 	letters = []
// 	for(var i = 0; i < arr.length; i++) {
// 		if(!isNaN(arr[i] * 1)){
// 			numbers.push(arr[i] * 1)
// 		}
// 		else if(isNaN(arr[i] * 1) && arr[i] !== ' '){
// 			letters.push(arr[i])
// 		}
// 	}
// 	console.log(numbers)
// 	var total = 0
// 	for(var n = 0; n < numbers.length; n++){
// 		total += numbers[n]
// 	}
// 	return Math.round(total/letters.length)
// }


















