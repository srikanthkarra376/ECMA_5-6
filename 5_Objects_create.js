//Object protos 

const bookProtos = {
  getSummery: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
     getAge:function () {
    const years = new Date().getFullYear()-this.year;
    return `${this.title} is ${years} old`;
  }
}
//create an object 

// const book1 = Object.create(bookProtos);
// book1.title = 'habit of winnig'
// book1.author = 'Rahul Dravid'
// book1.year = '2015'
// book1.getAge();

const book1 = Object.create(bookProtos,{
  title : {value:'habit of winning'},
  author : {value:'Rahul Dravid'},
  year : {value:'2015'},

});


console.log(book1);
