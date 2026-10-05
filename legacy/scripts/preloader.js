// Source: https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/
function preload() {
	var images = new Array();
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}
