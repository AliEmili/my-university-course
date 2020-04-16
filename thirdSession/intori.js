var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var x = 1,
    y = 1,
    z;

rl.on('line', function(line) {
    var j = parseInt(line);
    if (j == 1) {
        console.log(1);
    } else if (j == 2) {
        console.log(1);
        console.log(1);
    } else {
        console.log(x);
        console.log(y);
        for (let i = 0; i < j - 2; i++) {
            z = x + y;
            console.log(z);
            x = y;
            y = z;
        }
    }
});