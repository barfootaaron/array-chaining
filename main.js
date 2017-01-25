var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


// Step 1
var sortedNums = integers.sort(function(second, first) {return first-second; })
// Step 2
var filteredNums = sortedNums.filter(function(x) {return x <=19;});
// Step 3
var multiplyThenSubtract = filteredNums.map(function(y){return (y* 1.5)-1;});
//Step 4
function getSum (total, num) {
	return total + num;
}
var sumRemaining = multiplyThenSubtract.reduce(getSum);
document.getElementById("output").innerHTML = sumRemaining;


