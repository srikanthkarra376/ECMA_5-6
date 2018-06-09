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
  static topBookStore() {
    return 'koti book store';
  }
}

const book1 = new Book('you can win','shivkhera','2008');
console.log(book1);

