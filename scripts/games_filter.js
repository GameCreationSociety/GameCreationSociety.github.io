---
# Front Matter
---
// Populate an array of all the game tags being used
var game_tags = [
    {% for tag in site.game_tags %}"{{ tag }}",{% endfor %}
]

// This is called whenever a checkbox is switched.
// It determines which tags are enabled and then
// disables all listed games which do not have ALL of those tags.
function update_games_filter() {
    // Figure out which tags are enabled
    var applied_tags = [];
    var checkboxes = $('.games_filter_checkbox');
    checkboxes.each(function(index, box) {
        if (box.checked) {
            var id = $(box).attr('id');
            var class_to_keep = id.substring("tag_box_".length, id.length) + "_game-tag";
            applied_tags.push(class_to_keep);
        }
    });

    // Disable all listed games which don't have ALL of those tags
    var games_listed = $('.listed_game');
    var some_displayed = false;
    games_listed.each(function(index, game) {
        var element = $(game);
        var length = applied_tags.length;
        for (var i=0; i < length; i++) {
            var class_to_keep = applied_tags[i];
            if (!element.hasClass(class_to_keep)) {
                element.css("display", "none");
                return;
            }
        }
        element.css("display", "block");
        some_displayed = true;
    });

    // If no games fall within this filter, display the no_games_found div
    var element = $('#no_games_found');
    if (some_displayed) {
        element.css("display", "none");
    } else {
        element.css("display", "block");
    }
}
