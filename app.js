var message = "Czesc!";

function greet() {
    var message = "Na razie!"
}

console.log(message)

//es6 let
let message2 = "Czesc2";

function greet2() {
    let message2 = "Bye bye"
}

console.log(message2)

//array function

var fs = []

for (let i = 0; i < 10; i++) {
    fs.push(function() {
        console.log(i)
    })
}

fs.forEach(function(f) {
    f();
})

function varFunc() {
    var previous = 0;
    var current = 1;
    var i;
    var temp;

    for(i = 0; i < n; i += 1) {
        temp = previos;
        previous=current;
        current=temp + current;
    }
}

function letFunc() {
    let previous = 0;
    let current = 1;

    for (let i = 0; i < n; i += 1) {
        let temp = previous;
        previous = current;
        current = temp+current;
    }
}