var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var a, b, c, sum = 0;
rl.on('line', function(line) {
    if (!a) {
        a = parseInt(line);
    } else if (!b) {
        b = parseInt(line);
    } else {
        c = parseInt(line);
        for (let i = 2; i <= a; i++) {
            if (i % b == 0) {
                sum++;
            }
        }
        if (sum == c) {
            console.log('yes');
        } else {
            console.log('no');
        }
    }
});