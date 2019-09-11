import highlight from 'highlightjs';
import marked from 'marked';
import ace from 'ace-builds';

type Editor = ace.Ace.Editor;

let editors: Editor[] = [];

const output = {
    index: 0,
    log: function(x: any) {
        const area = document.querySelector('.output-area');
        if (area) {
            area.textContent = `${area.textContent}\n${x.valueOf()}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    resolveLesson();
    window.onhashchange = resolveLesson;

    document.querySelectorAll('.lesson-link').forEach((elem) => {
        (elem as HTMLAnchorElement).onclick = function(evn) {
            if (evn.target instanceof Element) {
                const path = evn.target.getAttribute('path');
                if (path) {
                    loadLesson(path).catch((err) => {
                        console.error(err);
                        alert(err);
                    });
                }
            }
        }
    });
});

function resolveLesson() {
    const target = window.location.hash;
    const links = Array.from(document.querySelectorAll('.lesson-link'));

    if (target) {
        for (const elem of links) {
            const link = elem as HTMLAnchorElement;
            if (link.href === target) {
                const path = link.getAttribute('path');
                // FIXME: Error handling!
                if (path) loadLesson(path);
            }
        }
    } else {
        const firstLesson = links[0] as HTMLAnchorElement;
        // FIXME: Error handling!
        const path = firstLesson.getAttribute('path');
        if (path) {
            loadLesson(path);
            document.location.hash = firstLesson.getAttribute('href') || '';
        }
    }
}

function loadLesson(path: string): Promise<void> {
    return new Promise((resolve, reject) => {
        getFile(`${path}lesson.md`).then((content) => {
            const lessonContainer = document.getElementById('lesson');
            if (lessonContainer) {
                lessonContainer.innerHTML = marked(content);
                highlightCode();
                editors = [];
    
                const elems = Array.from(document.querySelectorAll('.editor'));
                const promises = elems.map((elem) => {
                    return initEditor(elem as HTMLDivElement, path)
                });
                Promise.all(promises).then(() => resolve()).catch(reject);
            }
        }).catch(reject);
    });
}

async function initEditor(elem: HTMLDivElement, path: string) {
    const editorPane = document.createElement('div') as HTMLDivElement;
    editorPane.classList.add('editor-pane');

    const editor = ace.edit(editorPane);
    editor.setTheme('ace/theme/github');
    editor.session.setMode('ace/mode/javascript');
    editors.push(editor);

    // Load default source code.
    const source = elem.getAttribute('source'); 
    if (source) {
        const content = await getFile(`${path}${source}`);
        editor.setValue(content, 1);
    }

    // Add run button.
    const runBtn = document.createElement('button') as HTMLButtonElement;
    runBtn.classList.add('run-btn');
    runBtn.textContent = 'Run!';
    runBtn.onclick = runCode;

    // Add output area.
    const outArea = document.createElement('textarea') as HTMLTextAreaElement;
    outArea.classList.add('output-area');
    outArea.setAttribute('readonly', 'true');
    outArea.textContent = 'Your output will show up here...'

    elem.appendChild(editorPane);
    elem.appendChild(runBtn);
    elem.appendChild(outArea);
}

function runCode(evn: Event) {
    if (evn.target instanceof Element) {
        const editor = evn.target.parentElement as HTMLDivElement;

        const editorElems = Array.from(document.querySelectorAll('.editor'));
        const index = editorElems.findIndex((elem) => elem.isSameNode(editor));
        if (index >= 0) {
            output.index = index;
            const outArea = editor.querySelector('.output-area');
            if (outArea) {
                outArea.textContent = 'Your output will show up here...';
            }

            let content = editors[index].getSession().getValue();
            content = replace(content, 'console.log', 'output.log');
        
            // TODO...
        }
    }
}

function highlightCode() {
    for (const codeblock of document.querySelectorAll('pre code')) {
        highlight.highlightBlock(codeblock);
    }
}

function getFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
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

function replace(target: string, findStr: string, replaceStr: string): string {
    return target.split(findStr).join(replaceStr);
}
