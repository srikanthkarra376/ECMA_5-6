//constructor 

function Book(title,author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  
}
//proto type get summery 
    Book.prototype.getSummery = function(){
    return `${this.title} was written by ${this.author} 
    in ${this.month} of ${this.year}`;
   }
 //magazine constructor 
 
 function Magazine (title,author,month,year){
   Book.call(this,title,author,year);
   this.month = month;
  }
    //Inherit Prototype 
    Magazine.prototype = Object.create(Book.prototype);

  //Instanciate magazine object 

  const mag1 = new Magazine('Titanic','Srikanth','may','2018');
  Magazine.prototype.constructor = Magazine;

  console.log(mag1.getSummery());

