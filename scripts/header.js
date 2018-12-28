var page_header = $("#page-header");
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if (scroll == 0) {
        page_header.addClass("at-top");
    } else {
        page_header.removeClass("at-top");
    }
});
