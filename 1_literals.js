
//object literal 

const book = {
  title: 'you can win',
  author: 'shivkhera',
  year: '2008',
  getSummery: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};
console.log(book.getSummery());
console.log(Object.values(book));
console.log(Object.keys(book));
