function* greet() {
    console.log('you called next()');
    yield "hello!";
}

let greeter = greet();

console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done);

function* greet() {
    let friendly = yield "How";
    console.log(friendly);
    yield "are";
    yield "you?";
}

var greeter = greet();
