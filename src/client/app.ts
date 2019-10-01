import highlight from 'highlightjs';
import marked from 'marked';

import Editor from './editor';
import Request from './request';
import UI from './ui';

type NotificationType = 'tip' | 'note' | 'warning';
type Renderer = (elem: HTMLElement) => HTMLElement;

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
    const welcome = document.getElementById('welcome');
    if (!welcome) throw Error('Welcome section not found');
    if (!target) {
        welcome.classList.toggle('hidden', false);
        const lesson = document.getElementById('lesson');
        if (lesson) lesson.innerHTML = '';
        return;
    } else {
        welcome.classList.toggle('hidden', true); 
    }

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

        // Replace notification blocks.
        const notifications: {[key in NotificationType]: Renderer} = {
            'tip': (elem) => {
                const label = document.createElement('strong');
                label.innerHTML = 'Tip:&nbsp;';
                label.style.cssFloat = 'left';
                elem.prepend(label);
                return elem;
            },
            'note': (elem) => {
                const label = document.createElement('strong');
                label.innerHTML = 'Note:&nbsp;';
                label.style.cssFloat = 'left';
                elem.prepend(label);
                return elem;
            },
            'warning': (elem) => {
                const label = document.createElement('strong');
                label.innerHTML = 'Warning:&nbsp;';
                label.style.cssFloat = 'left';
                elem.prepend(label);
                return elem;
            }
        };
        for (const key in notifications) {
            document.querySelectorAll(`.${key}`).forEach((elem) => {
                const htmlElem = elem as HTMLElement;
                const newElem = notifications[key as NotificationType](
                    htmlElem
                );
                elem.replaceWith(newElem);
            });
        }

        // Add previous next button.
        // TODO: Refactor
        const btnRow = document.createElement('div');
        const colLeft = document.createElement('div');
        colLeft.classList.add('nav-btn-left');
        colLeft.style.textAlign = 'left';
        const colRight = document.createElement('div');
        colRight.classList.add('nav-btn-right');
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

