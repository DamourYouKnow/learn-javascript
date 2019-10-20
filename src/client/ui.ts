namespace UI {
    export function buttonLink(text: string, href: string): HTMLAnchorElement {
        const btn = document.createElement('a');
        btn.classList.add('btn', 'btn-outline-primary');
        btn.textContent = text;
        btn.href = href;
        btn.setAttribute('role', 'button');
        return btn;
    }

    export function enabled(elem: HTMLButtonElement, value: boolean) {
        elem.setAttribute('aria-disabled', String(!value));
        elem.disabled = !value;
        elem.classList.toggle('disabled', !value);
    }
}

export default UI;