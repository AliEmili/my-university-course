var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    let x = parseInt(line);
    if (x % 4 == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
});