


var testArray = ["aaaa","bbbb","cccc","dddd","eeee"];
/*
testArray[0]=>"aaaa"
testArray[1]=>"bbbb"
testArray[2]=>"cccc"
*/

/**
 * Array Map
 * Array.map(
 * function(currentValue, index, arr), thisValue)
 * {
 *  //your code
 * }
 * )
 * 
 */

function myFunction(currentValue, index, arr) { /*your code*/ }

myFunction = (currentValue, index, arr) => { /*your code*/ }


testArray.map()

testArray.map(function(currentValue, index, arr) { /*your code*/ })

var testArray = ["aaaa","bbbb","cccc","dddd","eeee"];
testArray.map((currentValue, index, arr) => { /*your code*/ })
//STEP-1 => FIRST LOOP
//currentValue=>"aaaa"
//index=>0
//arr=>["aaaa","bbbb","cccc","dddd","eeee"]

var testArray2 = [{name:"aaaa",phone:"1111"},{name:"bbbb",phone:"2222"},{name:"cccc",phone:"3333"}];

testArray2.map((currentValue, index, arr) => { /*your code*/ })
//STEP-1 => FIRST LOOP
//currentValue=>{name:"aaaa",phone:"1111"}
//index=>0
//arr=>[{name:"aaaa",phone:"1111"},{name:"bbbb",phone:"2222"},{name:"cccc",phone:"3333"}]
// FIRT ITEM => {name:"aaaa",phone:"1111"}  ---> currentValue.name = aaaa  currentValue.phone = 1111


//STEP-2 => SECOND LOOP
//currentValue=>{name:"bbbb",phone:"2222"}
//index=>1
//arr=>[{name:"aaaa",phone:"1111"},{name:"bbbb",phone:"2222"},{name:"cccc",phone:"3333"}]



