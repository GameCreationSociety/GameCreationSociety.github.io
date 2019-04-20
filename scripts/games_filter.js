---
# Front Matter
---
// Populate an array of all the game tags being used
var game_tags = [
    {% for tag in site.game_tags %}"{{ tag }}",{% endfor %}
]

// Add the update function as a listener
$(function() {
    $('.games_filter_checkbox').change(function() {
        update_games_filter();
    });
});

// This is called whenever a checkbox is switched.
// It determines which tags are enabled and then
// disables all listed games which do not have ALL of those tags.
function update_games_filter() {
    // Figure out which tags are enabled
    var applied_tags = [];
    var checkboxes = $('.games_filter_checkbox');
    checkboxes.each(function(index, box) {
        if (box.checked || $(box).prop('checked')) {
            var id = $(box).attr('id');
            var class_to_keep = id.substring("tag_box_".length, id.length) + "_game-tag";
            applied_tags.push(class_to_keep);
        }
    });

    // Disable all listed games which don't have ALL of those tags
    var games_listed = $('.listed_game');
    var num_games_found = 0;
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
        num_games_found++;
    });

    // Update the total number of games no_games_found
    var num_found_element = $('#number_of_games_found');
    if (num_games_found > 0) {
        num_found_element.text(num_games_found + " games found!");
    } else {
        num_found_element.html("No games found :(<br>Try filtering with different tags!");
    }
}
