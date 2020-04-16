var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var x, y, z;
rl.on('line', function(line) {
    if (!x) {
        x = parseInt(line);
    } else if (!y) {
        y = parseInt(line);
    } else {
        z = parseInt(line);
        console.log(x * y * z);
        process.exit();
    }
});