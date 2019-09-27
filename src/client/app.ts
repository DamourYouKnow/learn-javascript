import highlight from 'highlightjs';
import marked from 'marked';

import Editor from './editor';
import Request from './request';
import UI from './ui';

let editors: Editor[] = [];

document.addEventListener('DOMContentLoaded', async function() {
    resolveLesson();
    window.onhashchange = resolveLesson;

    lessonLinks().forEach((elem) => {
        elem.onclick = async function(evn) {
            if (evn.target instanceof Element) {
                const href = evn.target.getAttribute('href');
                if (href) {
                    window.location.hash = href;
                }
            }
        };
    });
});

async function resolveLesson(): Promise<void> {
    const target = window.location.hash;
    const links = lessonLinks();
    const clicked = links.find((link) => {
        return `#${link.href.split('#')[1]}` === target;
    });
    if (clicked) {
        const path = clicked.getAttribute('path');
        if (path) await loadLesson(path);
    }
}

// TODO: Duplicate interface declaration
interface EditorConfig {
    content?: string;
    tests?: string;
}

async function loadLesson(path: string): Promise<void> {
    const content = await Request.getFile(`${path}lesson.md`);

    const lessonContainer = document.getElementById('lesson');
    if (lessonContainer) {
        lessonContainer.innerHTML = marked(content);
        highlightCode();
        editors = [];

        const elems = Array.from(document.querySelectorAll('.editor'));

        for (const elem of elems) {
            const source = elem.getAttribute('source');
            const tests = elem.getAttribute('tests');

            const config: EditorConfig = {};
            if (source) config.content = await Request.getFile(path + source);
            if (tests) config.tests = await Request.getFile(path + tests);
            
            editors.push(new Editor(elem as HTMLElement, config));
        }

        // Add previous next button.
        // TODO: Refactor
        const btnRow = document.createElement('div');
        btnRow.classList.add('row');
        const colLeft = document.createElement('div');
        colLeft.classList.add('col-lg-6');
        colLeft.style.textAlign = 'left';
        const colRight = document.createElement('div');
        colRight.classList.add('col-lg-6');
        colRight.style.textAlign = 'right';

        const links = lessonLinks();
        const curLink = links.find((elem: HTMLAnchorElement) => {
            return elem.getAttribute('path') === path;
        });
        if (curLink) {
            const index = links.indexOf(curLink);
            if (index >= 1) {
                const prev = links[index - 1];
                const prevBtn = UI.buttonLink(
                    `Previous: ${prev.textContent}`, prev.href);
                colLeft.appendChild(prevBtn);
            }
            if (index < links.length - 1) {
                const next = links[index + 1];
                const nextBtn = UI.buttonLink(
                    `Next: ${next.textContent}`, next.href);
                colRight.appendChild(nextBtn);
            }
        }

        btnRow.appendChild(colLeft);
        btnRow.appendChild(colRight);
        lessonContainer.appendChild(btnRow);
    }
}

function highlightCode(): void {
    document.querySelectorAll('pre code').forEach((elem) => {
        highlight.highlightBlock(elem);
    });
}

function lessonLinks(): HTMLAnchorElement[] {
    const linkUl = document.getElementById('lesson-links') as HTMLUListElement;
    if (!linkUl) throw Error('Lesson link list not found');
    return Array.from(linkUl.querySelectorAll('a'));
}

