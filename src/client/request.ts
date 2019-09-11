namespace Request {
    export function getFile(path: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', path);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(Error(xhr.statusText));
                    }
                }
            };
            xhr.send();
        });
    }
}

export default Request;