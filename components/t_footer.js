import { getRealUrl } from "./util.js";
class FooterComponent extends HTMLElement {
	connectedCallback() {
		//console.log(window.location.href);
		this.loadContent();
	}
	async loadContent() {
		const html = await fetch(`${getRealUrl(window.location.href)}/components/footer.html`);
		this.innerHTML = await html.text();
	}
}

customElements.define("t-footer", FooterComponent);
