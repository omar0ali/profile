import { getRealUrl } from "./util.js";
class ExperienceComponent extends HTMLElement {
	async connectedCallback() {
        const html = await fetch(`${getRealUrl(window.location.href)}/components/experience.html`);
        this.innerHTML = await html.text();
    }
}

customElements.define("t-experience", ExperienceComponent);
