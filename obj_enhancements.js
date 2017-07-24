var color = 'red'
var speed = 10;
var drive = "go"

// function go() {
//     console.log("broom!")
// }

var car = {
    color, 
    speed, 
    [drive]: function() {
        console.log("vroom!")
    }
}

console.log(car.color)
console.log(car.speed)

car.go();