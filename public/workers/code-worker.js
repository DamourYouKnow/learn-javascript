let __output = [];

addEventListener('message', (message) => {
    console.log(message.data);
    const code = message.data;
    try {
        eval(code);
        console.log(__output);
        postMessage({'success': true, 'output': __output.join('\n')});
    } catch (err) {
        postMessage({'success': false, 'output': err.message});
    } finally {
        __output = [];
    }
});

function userconsolelog(item) {
    __output.push(item.valueOf());
}