import highlight from 'highlightjs';
import marked from 'marked';

import Editor from './editor';
import Request from './request';

let editors: Editor[] = [];

const output = {
    index: 0,
    log: function(x: any): void {
        const area = document.querySelector('.output-area');
        if (area) {
            area.textContent = `${area.textContent}\n${x.valueOf()}`;
        }
    }
};

document.addEventListener('DOMContentLoaded', async function() {
    await resolveLesson();
    window.onhashchange = resolveLesson;

    document.querySelectorAll('.lesson-link').forEach((elem) => {
        (elem as HTMLAnchorElement).onclick = async function(evn) {
            if (evn.target instanceof Element) {
                const path = evn.target.getAttribute('path');
                if (path) {
                    try {
                        await loadLesson(path);
                    } catch (err) {
                        console.error(err);
                        alert(err);
                    }
                }
            }
        };
    });
});

async function resolveLesson(): Promise<void> {
    const target = window.location.hash;
    const links = Array.from(document.querySelectorAll('.lesson-link'));

    if (target) {
        for (const elem of links) {
            const link = elem as HTMLAnchorElement;
            if (link.href === target) {
                const path = link.getAttribute('path');
                if (path) await loadLesson(path);
            }
        }
    } else {
        const firstLesson = links[0] as HTMLAnchorElement;
        const path = firstLesson.getAttribute('path');
        if (path) {
            document.location.hash = firstLesson.getAttribute('href') || '';
            await loadLesson(path);
        }
    }
}

async function loadLesson(path: string): Promise<void> {
    const content = await Request.getFile(`${path}lesson.md`);

    const lessonContainer = document.getElementById('lesson');
    if (lessonContainer) {
        lessonContainer.innerHTML = marked(content);
        highlightCode();
        editors = [];

        const elems = Array.from(document.querySelectorAll('.editor'));
        const contents = await Promise.all(elems.map((elem) => {
            return new Promise<string>((resolve, reject) => {
                const source = elem.getAttribute('source');
                if (source) {
                    Request.getFile(path + source).then(resolve).catch(reject);
                } else {
                    resolve('');
                }
            });
        }));

        editors = elems.map((elem, i) => {
            return new Editor(elem as HTMLElement, contents[i]);
        });
    }
}

function highlightCode(): void {
    for (const codeblock of document.querySelectorAll('pre code')) {
        highlight.highlightBlock(codeblock);
    }
}

