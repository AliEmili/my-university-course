var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var x, y;

rl.on('line', function(line) {
    if (!x) {
        x = parseInt(line);
    } else {
        y = parseInt(line);
        if (x == y) {
            console.log('equal');
        } else {
            for (let i = x; i <= y; i++) {
                console.log(i);
            }
        }
    }
});