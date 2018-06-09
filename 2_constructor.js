//constructor 

function Book(title,author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummery = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
//Instanciated the objects 
const book1 = new Book('you can win','shivkhera','2008');
const book2 = new Book('rich dad and poor dad ', 'robert kiyoki','2005');
console.log(book2.getSummery());