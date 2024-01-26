# README

This repository contains my personal portfolio website, showcasing my skills as a full stack developer. It includes my resume, work history, and a collection of projects that highlight my technical expertise and problem-solving abilities. Explore my portfolio to learn more about my work and experience in the field of web development.

**Links**

-   Visit site [https://omar0ali.github.io/resume/](https://omar0ali.github.io/resume)
-   To view source code: [https://github.com/omar0ali/resume](https://github.com/omar0ali/resume)

## How I Built This Website with Web Components

---

Building this website was made seamless and modular through the use of Web Components. Web Components are a set of web platform APIs that allow you to create reusable custom elements with encapsulated functionality and styling.

### Technologies Used

-   **Web Components:** Leveraged the power of Web Components to create modular and reusable UI elements.

-   **Custom Elements:** Defined custom HTML elements like `<t-header>` and `<t-footer>` to encapsulate specific parts of the page and functionality.

-   **Shadow DOM:** You can also utilized Shadow DOM to encapsulate the styles of individual components, preventing external styles from affecting their design. But I didn't go that far since I didn't really need to.

### Web Components Details

It's still my first time using Web Components, but I feel like it's pretty simple. I haven't used every single feature it has, but all in all, it's perfect for my setup. I'm currently in the process of creating my portfolio using Web Components, also deployed on GitHub, and I find the experience to be quite straightforward. Having used the Angular framework before, I appreciate the simplicity of Web Components, especially for something as simple as this.

Before delving deeper, it's important to clarify that I might have used Web Components in a non-conventional way. However, my primary goal is to simplify my development process by creating small files and seamlessly connecting them. For instance, the Index page is a collection of components, where each component is essentially an HTML page with specific information. The aim is to avoid redundant repetition across every web page, and Web Components have effectively fulfilled this requirement for me.

#### Header Component

```html
<t-header></t-header>
```

The `<t-header>` component displays the navigation bar and the Top Banner, showing a link where there is a downloadable pdf file of my CV. It is dynamically loads content from an external HTML file.

In a file named `'t_header.js'`, create a custom header class.

```js
class HeaderComponent extends HTMLElement {
	// ConnectedCallback is called when the element is connected to the DOM.
	connectedCallback() {
		this.loadContent();
	}
	async loadContent() {
		this.content = this.innerHTML || "";
		const html = await fetch("components/header.html");
		const topBanner = await fetch("components/topBanner.html");
		this.innerHTML =
			(await topBanner.text()) +
			(await html.text()) +
			`<h1>${this.content}</h1><hr>`;
	}
}
// Define the custom element with the tag name "t-header."
customElements.define("t-header", HeaderComponent);
```

#### Footer Component

```html
<t-footer></t-footer>
```

The `<t-footer>` component provides a footer section for the website.

### Importing Components
This is how components are easily imported on every page where you want to use them

```html
<head>
	<script type="module" src="components/t_header.js"></script>
	...
</head>
...
<body>
	<t-header></t-header>
</body>
```

### Benefits of using Web Components

Web Components offer a high degree of reusability, allowing components to be seamlessly utilized across different pages or projects. This becomes particularly advantageous when the goal is to quickly build a website for something straightforward, such as a portfolio. Unlike relying on entire libraries or frameworks like React or Angular for simpler projects, Web Components provide a lightweight solution. This simplicity is especially beneficial when the main objective is a swift development process.

By choosing Web Components, its not only about reusability, but you will also gain a deeper understanding of component-based architecture. This knowledge extends beyond the specific implementation of Web Components and can contribute to a broader comprehension of how other, more comprehensive frameworks operate.

Using Web Components for non expensive or complex projects it will both, satisfies the immediate requirements for simplicity, reusability and also represents a significant educational pursuit. It provides insights into principles of component-based design.

## Additional Resources

For more information on Web Components, I referred to the [WebComponents](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) WebDocs on Mozilla Developer Network (MDN). The documentation provided comprehensive guidance and examples, making the development process smooth and efficient.


- Used Bootstrap (https://getbootstrap.com/docs/5.3) for styling and layout.
- Used Marked (https://github.com/markedjs/marked) to facilitate the rendering of Markdown content within HTML.


### LINKS
Github Link: [https://github.com/omar0ali/resume](https://github.com/omar0ali/resume)