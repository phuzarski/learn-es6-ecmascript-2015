function greet(greeting, name = "Patryk") {
    console.log(greeting + " " + name)
}
// greet("hello", "Pawel")

function receive(complete) {
    complete()
}
receive(function() {
    console.log("complete");
})