
// "Const Key Word":

window.onload = function() {

  const pi = 3.142; //global Constant 

  function CalArea(r){
  
    const pi = 10;  //local version of constant 

    console.log("The Area is " + pi * r * r);
  }
  CalArea(25);
}


// let Keyword :



window.onload = function(){
  var lis = document.getElementsByTagName("li");
  for(let i = 0; i<lis.length ; i++){ //it create a local scope with varaibles
   lis[i].onclick = function(){
    console.log(i);
  }
}
}


// Default parameters :

function log(num =20){

  console.log(num);
}
log(30);// It over rides the function parameters 

function person(name="srikanth", age=25 , nationality="indian"){

  console.log(" The person name is "+ name + " his age is " + age + " He is an " + nationality );
}

person("bharath",25,"indian");// over riding the default parameter values

// Spread Operator :

// It is basically take an array and split into individual elements 

//example 1 
var countries = ["usa", "france","india", "belgium"];

console.log(...countries);


//example 2
var nums1 = [1,2,3,4];
var nums2 = [...nums1,5,6,7,8];// spread operator takes concatenate into array
console.log(nums2);

//exmple 3 
var arr = [1,2,3];

function add(x,y,z){
  return x+y+z;
}
console.log(add(...arr)); //spread operator takes the arr and split into the individuals then add it .


// Template Strings:


function loginfo(name , age ){

  console.log(`my name is ${name} and iam  ${age} years old`);

}        

loginfo("srikanth",25);

//Object Literals :
var name = "srikanth";

var age = 25;

var person = {
       name,age,
       getFullDetails(country) {
        console.log(`The person name is ${name} and his age is ${age} from ${country}`);
   }
};

console.log( person.getFullDetails("india"));


//New String Methods :

/* NEW STRING METHODS 
   -repeat
   -startswith
   -endsWith
   -includes
*/

//repeat
var str ="srikanth ";

console.log(str.repeat(10));

//startsWith && endsWith

var str1 = "Bonjour";

console.log(str1.startsWith("Bon"));

console.log(str1.startsWith("jour","3"));

console.log(str1.endsWith("r"));

console.log(str1.endsWith("n",str1.length-4));


//includes

console.log(str1.includes("Bo"));

