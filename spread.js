let first = [1,2,3]
let second = [4,5,6]


function addThree(a,b,c) {
    let result = a + b + c;
    console.log(result)
}


addThree(...first)
addThree(...second)