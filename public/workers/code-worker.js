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
    __output = [`${item}:`];
    fn();
}

function it(description, fn) {
    try {
        fn();
        __output.push(`✓ ${description}`);
    } catch (err) {
        __output.push(`✗ ${description}`);
        __output.push(`${err.message}`);
    }
}