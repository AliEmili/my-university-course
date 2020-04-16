var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    var x = parseFloat(line);
    if (x >= 10) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }
});