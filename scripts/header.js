var page_header = $("#page-header");
var header_img = $("#header-img");
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if (scroll == 0) {
        page_header.addClass("at-top");
        header_img.attr("src", "/images/official_no_back_white_smaller.png");
    } else {
        page_header.removeClass("at-top");
        header_img.attr("src", "/images/official_no_back_smaller.png");
    }
});

// https://stackoverflow.com/questions/8315347/webp-image-replacement?rq=1
var allImages = document.body.getElementsByClassName("replaceable");
var length = allImages.length;
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

if (isChrome) {
	for(i = 0; i < length; i++)
	{
		allImages[i].src = allImages[i].src.slice(0, -3).replace("images", "images/webp") + "webp";
	}
} else if (isSafari) {
	for(i = 0; i < length; i++)
	{
		allImages[i].src = allImages[i].src.slice(0, -3).replace("images", "images/jp2") + "jp2";
	}
}

if (document.title == "Home | Game Creation Society") {
	if (isChrome) {
	document.getElementById("section-3").setAttribute("url", "/images/webp/showcase_1_smaller.webp");
	} else if (isSafari) {
		document.getElementById("section-3").setAttribute("url", "/images/jp2/showcase_1_smaller.jp2");
	}
}
