const sumAll = function(...nums) {
    //console.log(nums);
    

    
    let total = 0;
    
    if (
            Number.isInteger(nums[0])
        && Number.isInteger(nums[nums.length -1])
        && nums[0] >= 0
        && nums[0] < nums[nums.length -1]
    ) {
        for (let i = 0; i <= nums[nums.length - 1]; i += 1) {
            //console.log(i);
            
            total += i;
        }
    } else if (
            Number.isInteger(nums[0])
        && Number.isInteger(nums[nums.length - 1])
        && nums[0] > 0
    ){
        for (let i = nums[0]; i >= nums[nums.length - 1]; i -= 1) {
            //console.log(i);
            
            total += i;
        }
    } else {
        return "ERROR";
    }
    
    
    
    return total;
};


//console.log(sumAll());
//console.log(sumAll(1, 4));
//console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
//console.log(sumAll());


// Do not edit below this line
module.exports = sumAll;
