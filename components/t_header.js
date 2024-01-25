import { getRealUrl } from './util.js';

class HeaderComponent extends HTMLElement {
	connectedCallback() {
        this.loadContent();
    }
    async loadContent() {
        let path = getRealUrl(window.location.href);
        if(path.includes(":")) {
            path = ''
        } else {
            const urlParts = path.split('/');
            path = urlParts[urlParts.length-1]
        }
        this.content = this.innerHTML || ""
        const header = await fetch(`${getRealUrl(window.location.href)}/components/header.html`);
        const banner = await fetch(`${getRealUrl(window.location.href)}/components/topBanner.html`)
        const txtHeader = await header.text();
        const txtBanner = await banner.text();
        let modifiedHeader = txtHeader.replace(/path/g, path)
        this.innerHTML = txtBanner + modifiedHeader + `<h1>${this.content}</h1><hr>`;
    }
}

customElements.define("t-header", HeaderComponent);
