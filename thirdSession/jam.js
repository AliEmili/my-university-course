var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var x, y;

rl.on('line', function(line) {
    if (line !== '\n') {
        if (!x) {
            x = parseInt(line);
        } else {
            y = parseInt(line);
            console.log(x + y);
            process.exit();
        }
    }
})