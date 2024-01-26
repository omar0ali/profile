import { getRealUrl } from "./util.js";
class ExperienceComponent extends HTMLElement {
	connectedCallback() {
        this.loadContent();
    }
    async loadContent() {
        const html = await fetch(`${getRealUrl(window.location.href)}/components/experience.html`);
        this.innerHTML = await html.text();
    }
}

customElements.define("t-experience", ExperienceComponent);
