var vegetables = ['poteto', 'tomato', 'cucumber'];
var fruits = ['aplle', 'pineaplle', 'banana'];
var element = ("cucumber");

for(let i = 0; i < fruits.length; i++){
  if(vegetables[i]==element){
    console.log("This is vegetables");
    break;
  } else {
    if(fruits[i]==element) {
      console.log("This is fruits");
      break;
    }
  }
}