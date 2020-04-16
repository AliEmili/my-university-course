var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var max, min;
rl.on('line', function(line) {
    let a, b;
    [a, b] = line.split(' ');
    a = parseInt(a);
    b = parseInt(b);
    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
    console.log(min);
    console.log(max);
});