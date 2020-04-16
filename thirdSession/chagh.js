var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    let x = parseInt(line);
    if (x >= 80000) {
        console.log('Fat');
    } else if (x <= 50000) {
        console.log('Thin');
    } else {
        console.log('Normal');
    }
});