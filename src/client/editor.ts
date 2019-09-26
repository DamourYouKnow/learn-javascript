import ace from 'ace-builds';

import Utils from './utils';

interface EditorConfig {
    content?: string;
    tests?: string;
}

interface Output {
    type: OutputType;
    content: string;
}

type OutputType = 'default' | 'label' | 'pass' | 'fail' | 'error';
type Renderer = (line: HTMLElement) => HTMLElement;

export default class Editor {
    private _editor: ace.Ace.Editor;
    private _elem: HTMLElement;
    private _default = '';
    private _tests?: string;
    private _running: boolean;

    public constructor(elem: HTMLElement, config?: EditorConfig) {
        this._elem = elem;
        this._running = false;

        const editorPane = document.createElement('div') as HTMLDivElement;
        editorPane.classList.add('editor-pane');
        
        ace.config.set('basePath', './ace');
        this._editor = ace.edit(editorPane);
        this._editor.setTheme('ace/theme/github');
        this._editor.session.setMode('ace/mode/javascript');
        if (config) {
            this._default = config.content || '';
            this._editor.setValue(this._default, 1);
            this._tests = config.tests;
        }

        const runBtn = document.createElement('button') as HTMLButtonElement;
        runBtn.classList.add('run-btn');
        runBtn.textContent = 'Run!';
        runBtn.onclick = this.execute.bind(this);

        const out = document.createElement('div') as HTMLDivElement;
        out.classList.add('output-area');
        out.textContent = 'Your output will show up here...';

        elem.appendChild(editorPane);
        elem.appendChild(runBtn);
        elem.appendChild(out);
    }

    public get elem(): HTMLElement {
        return this._elem;
    }

    public get default(): string {
        return this._default;
    }

    public set tests(value: string) {
        this._tests = value;
    }

    public execute(): void {
        if (this._running) return;

        const code = Utils.replace(
            this._editor.getSession().getValue(),
            'console.log',
            'userconsolelog'
        );

        const area = this._elem.querySelector('.output-area');
        if (area) {
            area.textContent = 'Your output will show up here...';

            this._running = true;


            const worker = new Worker('././workers/code-worker.js');

            const timer = setTimeout(() => {
                worker.terminate();
                this._running = false;
                area.textContent += `\nCode execution timed out.`;
            }, 2000);

            worker.addEventListener('message', (message: any) => {
                this._running = false;
                clearTimeout(timer);
                const result = message.data;
                if (result.success) {
                    this.output(result.output);
                } else {
                    this.output(result.output);
                }
            });

            worker.postMessage({'code':  code, 'tests': this._tests});
        }
    }

    private static readonly render: {[key in OutputType]: Renderer} = {
        'default': (line) => {
            line.classList.add('output-default');
            return line;
        },
        'error': (line) => {
            line.classList.add('output-error');
            return line;
        },
        'pass': (line) => {
            line.classList.add('output-pass');
            const check = document.createElement('span') as HTMLSpanElement;
            check.classList.add('indicator', 'pass-indicator');
            check.textContent = '✓';
            line.insertBefore(check, line.firstChild);
            return line;
        },
        'fail': (line) => {
            line.classList.add('output-fail');
            const check = document.createElement('span') as HTMLSpanElement;
            check.classList.add('indicator', 'fail-indicator');
            check.textContent = '✗';
            line.insertBefore(check, line.firstChild);
            return line;
        },
        'label': (line) => {
            line.classList.add('output-label');
            return line;
        }
    };

    private static outputLine(line: string): HTMLSpanElement {
        const elem = document.createElement('span') as HTMLSpanElement;
        elem.classList.add('output-line');
        elem.textContent = line;
        return elem;
    }

    private output(lines: Output[]) {
        const area = this._elem.querySelector('.output-area');
        if (!area) throw Error('Editor output not found');

        for (const line of lines) {
            area.appendChild(
                Editor.render[line.type](Editor.outputLine(line.content)));
        }
    } 
}
