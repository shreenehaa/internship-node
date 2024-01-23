# Hoisting

var ,function-hoisted
let const -not hoisted

JIT-2 PHASE COMPILATION

```
var price = 200;
function getInfo() {
  console.log("the old prize" + price);
  var price = 400;
  console.log("the new price" + price);
}
getInfo();
// ans:undefined and 400

```
