var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var a, b, c, ans = 0;
rl.on('line', function(line) {
    if (!a) {
        a = parseInt(line);
    } else if (!b) {
        b = parseInt(line);
    } else {
        c = parseInt(line);
        for (let i = b; i <= c; i++) {
            ans += a * i;
        }
        console.log(ans);
    }
});