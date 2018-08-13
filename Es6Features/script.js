
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
  for(let i = 0; i<lis.length ; i++){
   lis[i].onclick = function(){
    console.log(i);
  }
}
}


// "let" Examples 
