var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    let x = parseInt(line);
    let y = (4 * Math.pow(x, 2) - (7 * x) + 1);
    console.log(y);
})