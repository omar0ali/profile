import { getRealUrl } from "./util.js";
class FooterComponent extends HTMLElement {
	async connectedCallback() {
		//console.log(window.location.href);
		const html = await fetch(`${getRealUrl(window.location.href)}/components/footer.html`);
		this.innerHTML = await html.text();
	}
}

customElements.define("t-footer", FooterComponent);
