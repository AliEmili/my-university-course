var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    let x = parseFloat(line);
    x /= 5;
    if (x < 1) {
        console.log('d');
    } else if (x < 2) {
        console.log('c');
    } else if (x < 3) {
        console.log('b');
    } else {
        console.log('a');
    }
});