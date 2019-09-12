import ace from 'ace-builds';

import Utils from './utils';


let running: HTMLTextAreaElement | null = null;

(console as any).userlog = function(item: any) {
    if (running) {
        running.textContent = `${running.textContent}\n${item.valueOf()}`;
    }
};

export default class Editor {
    private _editor: ace.Ace.Editor;
    private _elem: HTMLElement;
    private _default = '';
    private _running: boolean;

    public constructor(elem: HTMLElement, content?: string) {
        this._elem = elem;
        this._running = false;

        const editorPane = document.createElement('div') as HTMLDivElement;
        editorPane.classList.add('editor-pane');
        
        ace.config.set('basePath', './ace');
        this._editor = ace.edit(editorPane);
        this._editor.setTheme('ace/theme/github');
        this._editor.session.setMode('ace/mode/javascript');
        if (content) {
            this._default = content;
            this._editor.setValue(content, 1);
        }

        const runBtn = document.createElement('button') as HTMLButtonElement;
        runBtn.classList.add('run-btn');
        runBtn.textContent = 'Run!';
        runBtn.onclick = this.execute.bind(this);

        const out = document.createElement('textarea') as HTMLTextAreaElement;
        out.classList.add('output-area');
        out.setAttribute('readonly', 'true');
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

    public execute(): void {
        if (this._running) return;

        const code = Utils.replace(
            this._editor.getSession().getValue(),
            'console.log',
            'console.userlog'
        );

        const area = this._elem.querySelector('.output-area');
        if (area) {
            area.textContent = 'Your output will show up here...';
            running = area as HTMLTextAreaElement;

            this._running = true;


            const worker = new Worker('../workers/code-worker.js');
            worker.addEventListener('message', (message: any) => {
                this._running = false;
                if (!message.data) {
                    const err = message.data;
                    area.textContent = `${area.textContent}\n${err.message}`;
                }
            });

            setTimeout(() => {
                worker.terminate();
                this._running = false;
            }, 3000);     

            worker.postMessage(code);
        }
    }
}
