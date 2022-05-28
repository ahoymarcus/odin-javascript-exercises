const arr1 = [1, 2, 3, 4];

//const args = '3, 2';
// ["hey", 2, 3, "ho"].sort(function(a, b) { return a - b });

const removeFromArray = function(arr, ...args) {
    let result = [];
    
    //args.sort((a, b) => a - b);
    //console.log(args);
    
    // includes() is case sensitive and doesn't convert
    result = arr.filter(item => !args.includes(item));
    
    return result;
};


//console.log(removeFromArray(arr1, 3, 2));


// Do not edit below this line
module.exports = removeFromArray;


