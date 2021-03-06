let __output = [];
let __consoleOutput = [];

addEventListener('message', (message) => {
    const data = message.data;
    let code = data.code;
    if (data.tests) {
        code += `\n${data.tests}`;
    }

    try {
        eval(code); // WARNING: Update block below if this line moves.
        postMessage({'success': true, 'output': __output});
    } catch (err) {
        let line = undefined;
        if (err.stack) {
            const lineCols = err.stack.match(/:\d+:\d+/g).filter((lc) => {
                /**
                 * This line is used to detect if an error comes from the
                 * eval() call.
                 */
                return lc != ':12:9';
            });
            if (lineCols.length > 0) line = lineCols[0].split(':')[1];
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
    const value = formatConsole(item);
    __output.push({'type': 'default', 'content': value});
    __consoleOutput.push(item);
}

function formatConsole(val) {
    if (val === null) return 'null';
    if (val == null || typeof val === 'string' || typeof val === 'number') {
        return String(val);
    }
    if (val.length) {
        return `[${Array.prototype.map.call(val, formatConsole).join(', ')}]`;
    }
    if (val.toString) return val.toString();
    return String(val);
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