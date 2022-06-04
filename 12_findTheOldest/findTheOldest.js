const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];

const findTheOldest = function(arr) {
    const newArr = arr;
    
    let curDate = new Date().getFullYear();
    
    newArr.sort((a, b) => {
        return  ((b.yearOfDeath || curDate) - b.yearOfBirth) - ((a.yearOfDeath || curDate) - a.yearOfBirth);
    });    
       
    return newArr[0];
};



// Do not edit below this line
module.exports = findTheOldest;


console.log(findTheOldest(people));
console.log();
console.log();
console.log();

