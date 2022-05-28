// https://www.wikihow.com/Calculate-Leap-Years

const leapYears = function(year) {    
    if (year % 4 == 0) {
        let divBy4 = year / 4;
        console.log('divBy4: ', divBy4);
        
        if (year % 100 == 0) {
            let divBy100 = divBy4 / 100;
            let divBy400 = divBy100 / 400;
            console.log(`divBy100: ${divBy100} and divBy400: ${divBy400}`);
            
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};



//console.log(leapYears());
//console.log(leapYears(1996));
//console.log(leapYears(1900));
console.log(leapYears(1600));
//console.log(leapYears(700));


// Do not edit below this line
module.exports = leapYears;
