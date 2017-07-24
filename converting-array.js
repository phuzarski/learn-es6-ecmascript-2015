const products = Array.from(documents.querySelectorAll('.product'));

products
.filter(product => parseFloat(product.innerHTML) < 10 )
.forEach(product => product.style.color = 'red');

const products = document.querySelectorAll('.product');

console.log(product);