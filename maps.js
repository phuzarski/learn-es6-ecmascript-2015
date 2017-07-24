var myMap = new Map();

//API

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

// console.log(myMap.get('qwerty')); //undefined
// console.log(myMap.get('foo')); // foo

// myMap.clear();
// console.log(myMap.size);
// console.log(myMap.has('qwerty')); // false

// iretators
// keys()
// entries()
// values

// for (var [key, value] of myMap.entries()) {
//     console.log(key + ' + ', value);
// }

//ES6 weekMaps

var myObj = {}
var myFunc = function() {}

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');

for (var [key, value] of myMap.entries()) {
    console.log(key + ' + ', value);
}