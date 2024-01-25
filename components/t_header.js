import { getRealUrl } from './util.js';

class HeaderComponent extends HTMLElement {
	connectedCallback() {
        this.loadContent();
    }
    async loadContent() {
        let urlParts = []
        let path = getRealUrl(window.location.href);
        console.log("url: "+path)
        this.urlParts = path.split('/');
        if(path.includes(":")) {
            this.path = ''
        } else {
            this.path = this.urlParts[this.urlParts.length-2]
        }
        console.log(this.urlParts)
        console.log("uPath: "+this.path)

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
