const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    }
    
    const fibSerie = [1, 1];
    
    for (let i = 2; i < num; i += 1) {
        fibSerie[i] = fibSerie[i - 1] + fibSerie[i - 2];
    }
    
    console.log(fibSerie);
    
    return fibSerie[fibSerie.length - 1];
};



// Do not edit below this line
module.exports = fibonacci;



console.log(fibonacci(4));
// console.log(fibonacci(10));
// console.log(fibonacci(-25));
// console.log(fibonacci('1'));
// console.log(fibonacci('8'));


