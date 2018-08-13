
// "Const Key Word"

window.onload = function() {

  const pi = 3.142; //global Constant 

  function CalArea(r){
  
    const pi = 10;  //local version of constant 

    console.log("The Area is " + pi * r * r);
  }
  CalArea(25);
}


// let Keyword 



window.onload = function(){
  var lis = document.getElementsByTagName("li");
  for(let i = 0; i<lis.length ; i++){ //it create a local scope with varaibles
   lis[i].onclick = function(){
    console.log(i);
  }
}
}


// Default parameters 

function log(num =20){

  console.log(num);
}
log(30);// It over rides the function parameters 

function person(name="srikanth", age=25 , nationality="indian"){

  console.log(" The person name is "+ name + " his age is " + age + " He is an " + nationality );
}

person("bharath",25,"indian");// over riding the default parameter values

// Spread Operator 

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