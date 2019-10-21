let __output = [];
let __consoleOutput = [];

addEventListener('message', (message) => {
    const data = message.data;
    let code = data.code;
    if (data.tests) {
        code += `\n${data.tests}`;
    }

    try {
        eval(code);
        postMessage({'success': true, 'output': __output});
    } catch (err) {
        let line = undefined;
        if (err.stack) {
            const lineCols = err.stack.match(/(>:\d+:\d+)|(:\d+:\d+)/g);
            if (lineCols) {
                const chromeLineCol = lineCols.find((lc) => lc.startsWith('>'));
                if (chromeLineCol) {
                    line = chromeLineCol.split(':')[1];
                } else {
                    line = lineCols[0].split(':')[1];
                }
            }
        }

        const content = line ? `Line ${line} - ${err.message}`: err.message
        postMessage({
            'success': false, 
            'output': [{'type': 'error', 'content': content}]
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

assert.fail = function(message) {
    throw Error(message);
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