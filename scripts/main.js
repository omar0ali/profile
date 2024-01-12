function debug(debug) {
	let styleLink = document.getElementById("style");
    console.log("Debug is "+ debug)
	if (debug) {
        console.log("Debugging")
		styleLink.href = "./style.css";
	} else {
        console.log("Debugging Off")
		styleLink.href = "resume/style.css";
	}
}

debug(false); //Make sure its false when pushing to github

function includeHTML(debug) {
	var z, i, element, file, http;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		element = z[i];
		/*search for elements with a certain attribute:*/
		file = element.getAttribute("include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			http = new XMLHttpRequest();
			http.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						element.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						element.innerHTML = "Page not found.";
					}
                    /*remove the attribute, and call this function once more:*/
					element.removeAttribute("include-html");
					includeHTML(false);
				}
			};
			if (debug) {
                console.log(file)
				http.open("GET", file, true);
			} else {
				http.open("GET", "resume/" + file, true);
			}
			http.send();
			/*exit the function:*/
			return;
		}
	}
}

includeHTML(false);
