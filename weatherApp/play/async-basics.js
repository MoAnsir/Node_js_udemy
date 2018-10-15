console.log('Starting App');

setTimeout(() => {
    console.log('Inside callback');
}, 2000);

setTimeout(() => {
    console.log('Inside callback No 2');
}, 0);

console.log('finishing up');
