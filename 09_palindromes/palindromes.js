const palindromes = function (str) {
    let nonPunctatedStr = '';
    let reversedStr = '';
    const pattern = /\w/;
    
    for (let i = 0; i < str.length; i += 1) {
        if (pattern.test(str[i])) {
            nonPunctatedStr += str[i];
        }
    }
    
    for (let i = str.length - 1; i >= 0; i -= 1) {
        if (pattern.test(str[i])) {
            reversedStr += str[i];
        }
    }
    
    console.log('nonPunctatedStr', nonPunctatedStr);
    console.log('reversedStr', reversedStr);
    
    if (nonPunctatedStr.toLowerCase() === reversedStr.toLowerCase()) {
        return true;
    }
    
    return false;
};

// Do not edit below this line
module.exports = palindromes;


//console.log()
// console.log(palindromes('racecar'));
// console.log(palindromes('racecar!'));
// console.log(palindromes('Racecar!'));
// console.log(palindromes('A car, a man, a maraca.'));
// console.log(palindromes('Animal loots foliated detail of stool lamina.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));


