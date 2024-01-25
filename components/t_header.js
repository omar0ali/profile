class HeaderComponent extends HTMLElement {
	connectedCallback() {
        this.loadContent();
    }
    async loadContent() {
        this.content = this.innerHTML || ""
        const html = await fetch("components/header.html");
        const topBanner = await fetch("components/topBanner.html")
        this.innerHTML = await topBanner.text() + await html.text() + `<h1>${this.content}</h1><hr>`;
    }
}

customElements.define("t-header", HeaderComponent);
