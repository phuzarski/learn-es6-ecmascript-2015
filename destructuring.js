function generateObj() {
    return {
        color: 'blue',
        name: 'Patryk',
        state: 'New York',
        position: 'Forward'
    }
}



var {name:firstName, state:location} = generateObj();

console.log(firstName)
console.log(location)
/////////////////
var [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];

console.log(first);
console.log(fifth);

/////////////////
var people = [
    {
        "firstName": "Clinton",
        "lastName": "Ruiz",
        "phone": "1-4123123",
        "email": "email@o2.pl",
        "address": "12d asd ads"
    },
     {
        "firstName": "Waclaw",
        "lastName": "xxaaaa",
        "phone": "1-4123123",
        "email": "waclaw_email@op.pl",
        "address": "12d sdasda ads"
    }, {
        "firstName": "Luigi",
        "lastName": "asdasdasd",
        "phone": "1-3123",
        "email": "email@ssso2.pl",
        "address": "12d asd ads"
    }
]

// people.forEach(({firstName}) => console.log(firstName))

var [,Waclaw] = people; //skip the first one, look up the second one, and name it Waclaw

function logEmail({email}) {
    console.log(email);
}

logEmail(Waclaw)