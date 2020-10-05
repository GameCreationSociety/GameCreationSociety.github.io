function convert(filename, alt_text, element_id, parent_element_id, is_game=false, base_ext="webm") {
	// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

	// Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;

	var elementToAppend;

	var appendString = filename;

	if ((isOpera || isSafari || isIE)) {
		// If we're on Opera, Safari, or Internet Explorer, make an image
		// var elementToAppend = document.createElement("img");

		// elementToAppend.src = appendString + ".gif";
		// elementToAppend.alt = alt_text;
		// elementToAppend.loading = "lazy";

		var parent = document.getElementById(parent_element_id);
		parent.src = appendString + ".gif";
	}
	else if (base_ext == "webm") {
		// Otherwise, use a video
		var elementToAppend = document.createElement("video");

		elementToAppend.autoplay = true;
		elementToAppend.loop = true;

		// These don't work because of some weird issue where the play method isn't allowed, 
		// but it would sure be nice to pause and unpause videos based on the on mouse hover...
		// elementToAppend.addEventListener("mouseover", play_video(elementToAppend));
		// elementToAppend.addEventListener("mouseout", pause_video(elementToAppend));

		var videoSource = document.createElement("source");

		videoSource.src = appendString + ".webm";
		videoSource.type = "video/webm";

		if (is_game) {
			elementToAppend.className = "listed-game-video";
		}

		elementToAppend.appendChild(videoSource);

		elementToAppend.id = element_id;

		var parent = document.getElementById(parent_element_id);
		parent.appendChild(elementToAppend);
	}
}

function pause_video(video) {
	video.pause();
}

function play_video(video) {
	video.play();
}
