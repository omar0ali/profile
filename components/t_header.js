import { getRealUrl } from "./util.js";

class HeaderComponent extends HTMLElement {
	connectedCallback() {
		this.loadContent();
	}
	async loadContent() {
		this.path = getRealUrl(window.location.href);
		this.urlParts = this.path.split("/");
		if (this.path.includes("localhost")) {
			this.path = "";
		} else {
			this.path = this.urlParts[this.urlParts.length - 1];
		}

		this.content = this.innerHTML || "";
		this.header = await fetch(
			`${getRealUrl(window.location.href)}/components/header.html`
		);
		this.banner = await fetch(
			`${getRealUrl(window.location.href)}/components/topBanner.html`
		);
		this.txtHeader = await this.header.text();
		this.txtBanner = await this.banner.text();
		let modifiedHeader = this.txtHeader.replace(/path/g, this.path);
		this.innerHTML =
			this.txtBanner + modifiedHeader + `<h1>${this.content}</h1><hr>`;
	}
}

customElements.define("t-header", HeaderComponent);
