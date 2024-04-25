import { getRealUrl } from "./util.js";
class EducationComponent extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(
      `${getRealUrl(window.location.href)}/components/education.html`,
    );
    this.innerHTML = await html.text();
  }
}

customElements.define("t-education", EducationComponent);
