const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const result = arr.reduce((acc, cur) => acc += cur, 0);
    
    return result;
};

const multiply = function(arr) {
    const result = arr.reduce((acc, cur) => acc *= cur, 1);
    
    return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num < 0) {
        return 'Please, give a positive number!';
    } 
    
    if (num === 0) {
        return 1;
    }
    
    return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


// console.log(factorial(-5));
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
console.log(factorial(5));
//console.log(factorial(10));





