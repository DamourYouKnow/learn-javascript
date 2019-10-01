let __output = [];
let __consoleOutput = [];

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
    const itemStr = (x) => {
        if (x === null) return 'null';
        if (x === undefined) return 'undefined';
        return x.valueOf();
    };
    const value = itemStr(item);
    __output.push({'type': 'default', 'content': value});
    __consoleOutput.push(value);
}

const assert = {};

assert.equals = function(a, b, message) {
    if (a !== b) {
        throw Error(message);
    }
};

assert.notEquals = function(a, b, message) {
    if (a === b) {
        throw Error(message);
    }
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