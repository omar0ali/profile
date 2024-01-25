class EducationComponent extends HTMLElement {
	connectedCallback() {
        this.loadContent();
    }
    async loadContent() {
        const html = await fetch("/components/education.html");
        this.innerHTML = await html.text();
    }
}

customElements.define("t-education", EducationComponent);
