import ace from 'ace-builds';

export default class Editor {
    private _editor: ace.Ace.Editor;
    private _elem: HTMLElement;
    private _default = '';

    public constructor(elem: HTMLElement, content?: string) {
        this._elem = elem;

        const editorPane = document.createElement('div') as HTMLDivElement;
        editorPane.classList.add('editor-pane');
        
        ace.config.set('basePath', '/ace');
        this._editor = ace.edit(elem);
        this._editor.setTheme('ace/theme/github');
        this._editor.session.setMode('ace/mode/javascript');
        if (content) {
            this._default = content;
            this._editor.setValue(content, 1);
        }

        const runBtn = document.createElement('button') as HTMLButtonElement;
        runBtn.classList.add('run-btn');
        runBtn.textContent = 'Run!';
        runBtn.onclick = this.execute;

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

    public execute() {
        const code = this._editor.getSession().getValue();
    }
}