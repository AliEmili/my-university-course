var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    let x = parseInt(line);
    if (x == 1) {
        console.log('Easy');
    } else if (x == 2) {
        console.log('Very nice');
    } else if (x == 3) {
        console.log('Yes you can');
    } else {
        console.log('No thanks');
    }
});