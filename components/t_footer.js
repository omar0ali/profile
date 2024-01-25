class FooterComponent extends HTMLElement {
	connectedCallback() {
		console.log(window.location.href);
		this.loadContent();
	}
	async loadContent() {
		const html = await fetch("resume/components/footer.html");
		this.innerHTML = await html.text();
	}
}

customElements.define("t-footer", FooterComponent);
