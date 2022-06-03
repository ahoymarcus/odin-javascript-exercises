const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ];


const getTheTitles = function(arr) {
    const result = arr.map(cur => cur.title);
    
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;



console.log(getTheTitles(books));

