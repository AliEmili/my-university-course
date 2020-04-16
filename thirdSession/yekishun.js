var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var max = -101;
var a;
rl.on('line', function(line) {
    if (!a) {
        a = parseInt(line);
    } else {
        var b = line.split(' ');
        for (let i = 0; i < a; i++) {
            if (parseInt(b[i]) > max) {
                max = parseInt(b[i]);
            }
        }
        console.log(max);
    }
});