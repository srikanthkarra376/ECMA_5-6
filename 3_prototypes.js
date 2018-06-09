//constructor 

function Book(title,author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  
}
//proto type get summery 
     Book.prototype.getSummery = function(){

    return `${this.title} was written by ${this.author} in ${this.year}`;
   }
//get how many  years old book 

   Book.prototype.getAge = function () {
     const years = new Date().getFullYear()-this.year;
     return `${this.title} is ${years} old`;
   }
   //Revised or Chnaged Year 
   Book.prototype.Revise = function (newYear ){
     this.year = newYear;
     this.revised = true;
   }

 

//Instanstiate an Object
const book1 = new Book('you can win','shivkhera','2008');
const book2 = new Book('rich dad and poor dad ', 'robert kiyoki','2005');
console.log(book2.getSummery());
console.log(book1.getSummery());
console.log(book2.getAge());
book2.Revise(2018);
console.log(book2);
