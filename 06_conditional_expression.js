let a = prompt("hey whats you age?")
a=Number.parseInt(a) //Converting string to num
console.log(typeof a)
if (a<0){
  alert("This is not valid age");
}
else if (a<9){
  alert("baccha u are kid You cannot even think of drive");
}
else if (a<18 && a>=9){
  alert("You are kid you  can drive when you become 18 year old ");
}
  
else{
  alert("You can drive as you are above 18 ");
}


// Switch case statement



let station = prompt("Enter station Number:-");
switch (station) {
  case '1':
    console.log("Bhavanagar");
    break;
  case '2':
    console.log("Shihor");
    break;
  case '3':
    console.log("Lathi");
    break;
  case '4':
    console.log("Botad");
    break;
  case '5':
    console.log("Ranpur");
    break;
  case '6':
    console.log("Limbadi");
    break;
  case '7':
    console.log("Surendranagar");
    break;
  default:
    console.log("Plz enter valid Station.");

}

