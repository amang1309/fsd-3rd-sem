console.log('1. Script start');

setTimeout(() => {
    console.log('4. setTimeout (Timer phase)');
}, 0);

setImmediate(() => {
    console.log('5. setImmediate (Check phase)');
}, 0);

process.nextTick(() => {
    console.log('2. process.nextTick (Next-tick queue)');
});

console.log('3. Script end');