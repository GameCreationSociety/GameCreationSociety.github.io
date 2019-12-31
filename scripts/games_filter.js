---
# Front Matter
---
// Populate an array of all the game tags being used
var game_tags = [
    {% for tag in site.game_tags %}"{{ tag }}",{% endfor %}
]

// Populate tags of other platforms from across the site
var other_tags = [
    {% for game in site.games %}
        {% for tag in game.tags %}
            {% unless site.game_tags contains tag %}
            "{{ tag }}_game-tag",
            {% endunless %}
        {% endfor %}
    {% endfor %}
]

// Condense tag list to only be unique
var other_platform_tags = [];

for (tag of other_tags) {
    if (!other_platform_tags.includes(tag)) {
        other_platform_tags.push(tag);
    }
}

// Add the update function as a listener
$(function() {
    $('.games_filter_checkbox').change(function() {
        update_games_filter();
    });
    $('#search').on('input', function() {
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

                // This is a very long check to see if other is selected and what to do if so
                if (class_to_keep == "Other_game-tag") {
                    var hasTag = false;
                    for (tag of other_platform_tags) {
                        if (element.hasClass(tag)) {
                            hasTag = true;
                        }
                    }
                    if (!hasTag) {
                        element.css("display", "none");
                        return;
                    }
                } else {
                    element.css("display", "none");
                    return;
                }
            }
        }

        // Added: Disable games which don't match search conditions if there are any
        var search_terms = element[0].children[1].children;
        var title = search_terms[0].textContent.toUpperCase();
        var members = search_terms[2].textContent.toUpperCase();
        var desc = search_terms[3].textContent.toUpperCase();

        // Convert the term to all uppercase and compare it to the search terms
        term = $('#search').val().toUpperCase();
        if (!(title.includes(term) || members.includes(term) || desc.includes(term))) {
            element.css("display", "none");
            return;
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

// Run the filter when the page loads, in case any filters are enabled.
update_games_filter();
