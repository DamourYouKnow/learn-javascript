let __output = [];

addEventListener('message', (message) => {
    const data = message.data;
    let code = data.code;
    if (data.tests) {
        code += `\n${data.tests}`;
    }
    console.log(code);

    try {
        eval(code);
        console.log(__output);
        postMessage({'success': true, 'output': __output});
    } catch (err) {
        postMessage({
            'success': false, 
            'output': [{'type': 'error', 'content': err.message}]
        });
    } finally {
        __output = [];
    }
});

function userconsolelog(item) {
    __output.push({'type': 'default', 'content': item.valueOf()});
}

const assert = {};

assert.equals = function(a, b, message) {
    if (a !== b) {
        throw Error(message);
    }
    console.log('equals');
};

assert.ok = function(a, message) {
    if (!a) {
        throw Error(message);
    }
};

function describe(item, fn) {
    __output.push({'type': 'label', 'content': item});
    fn();
}

function it(description, fn) {
    try {
        fn();
        __output.push({'type': 'pass', 'content': description});
    } catch (err) {
        __output.push({'type': 'fail', 'content': description});
        if (err.message) {
            __output.push({'type': 'error', 'content': err.message});
        }
    }
}