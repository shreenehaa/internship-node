// var ,function-hoisted
// let,const-not hoisted

// JIT-JUST IN TIME COMPILATION
// COMPILATION PHASE -1ST
// EXECUTION PHASE-2ND
//  js guy and context guy
// js take care of declaration
// js ask contxt

// console.log(a) skipped
// var a = 10; js asks contxt do you know a?no .just note it
// console.log(a);skipped

var price = 200;
function getInfo() {
  console.log("the old prize" + price);
  var price = 400;
  console.log("the new price" + price);
}
getInfo();
// ans:undefined and 400

let price = 200;
function getInfo() {
  // ALL THE LINE BEFORE PRICE DECLARATION TILL THE FUNCTION STARTS IS CALLED TDZ-TEMPORAL DEAD ZONE
  console.log("the old prize" + price);
  let price = 400;
  console.log("the new price" + price);
}
getInfo();
// ans:not initaialized
