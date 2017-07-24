// Promises with ES6

var d = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
                resolve('hello world!')
            } else {
                reject('no')
            }
            }, 2000)
});

d.then((data) => {
    console.log('success : ', data)
    return 'foo bar' //this return will be pass to second then as a promise data
})
.then((data) => {
    console.log('success 2: ' , data)
    throw new Error('error thrown!');    
})
.catch(error => console.error('error: ', error));


