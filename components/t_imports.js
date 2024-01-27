import { getRealUrl } from "./util.js";
class ImportsComponent extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute("title") || "Title goes here";
		this.innerHTML = `
        <meta charset="utf-8">
        <title>${this.title}</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="./favicon.ico">
        <link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link id="style" rel="stylesheet" href="${getRealUrl(window.location.href)}/style.css">
        `;
	}
}

customElements.define("t-imports", ImportsComponent);
