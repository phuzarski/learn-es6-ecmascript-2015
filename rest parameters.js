function myFunc() {
console.log(arguments.length);
}

// myFunc(1,2,3)

function Store() {
    var aisle = {
        fruit: [],
        vegetable: []
    }
    return {
        add: function(category, ...items) {
            console.log(items);
        },
        aisle: aisle
    }
}