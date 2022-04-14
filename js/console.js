let t1 = +new Date();
console.log('Script started', t1);
console.log('element', document.getElementById("order-matters"));
while ((new Date()) < t1 + 5000) {
    // do nothing
}
console.log('Script has finished running at ', +new Date());