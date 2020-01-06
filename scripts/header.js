var page_header = $("#page-header");
var header_img = $("#header-img");
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if (scroll == 0) {
        page_header.addClass("at-top");
        header_img.attr("src", "/images/official_no_back_white_smaller.webp");
    } else {
        page_header.removeClass("at-top");
        header_img.attr("src", "/images/official_no_back_smaller.webp");
    }
});
