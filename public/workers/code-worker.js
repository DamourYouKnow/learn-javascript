addEventListener('message', (message) => {
    const code = message.data;
    try {
        eval(code);
        postMessage(true);
    } catch (err) {
        console.error(err);
        postMessage(err);
    }
});