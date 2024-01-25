import { getRealUrl } from "./util.js";
class EducationComponent extends HTMLElement {
	connectedCallback() {
        this.loadContent();
    }
    async loadContent() {
        const html = await fetch(`${getRealUrl(window.location.href)}/components/education.html`);
        this.innerHTML = await html.text();
    }
}

customElements.define("t-education", EducationComponent);
