const ftoc = function(tempFar) {
    let tempCels = 0;
    
    tempCels = (tempFar - 32) * (5 / 9);
    
    return Number(tempCels.toFixed(1));
};

const ctof = function(tempCels) {
    let tempFar = 0;
    
    tempFar = (tempCels * 9 / 5) + 32;
    
    return Number(tempFar.toFixed(1));
};




// ftoc(tempFar)
ftoc(32)
// ftoc(100)
// ftoc(-100)

// ctof(tempCels)
ctof(0)
// ctof(73,2)
// ctof(-10)



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
