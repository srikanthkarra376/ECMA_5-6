class Book {
  constructor(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
 }
 getSummery() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
 } 
 getAge() {
  const years = new Date().getFullYear()-this.year;
  return `${this.title} is ${years} old`;
 }
}
//Magazine sub class
class  Magazine extends Book {
  constructor(title,author,month,year){
    super(title,author,year);
    this.month = month;
  }
} 
//Instantiate  Magazine

const forbes = new Magazine("Forbes", "forbesAgency","may", "2017.");
console.log(forbes.getSummery());
console.log(forbes.getAge());
