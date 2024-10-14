---
# Front Matter
---
// Populate an array of all the game tags being used by _config.yml
var game_tags = [
    {% for taglist in site.tag_lists %}
    {% for tag in taglist.tags %}
    "{{ tag }}",
    {% endfor %}
    {% endfor %}
]

var debug = ["Arcade", "Fighting", "Horror", "Party", "Platformer", "Puzzle", "Rhythm", "Rougelike", "RPG", "Shooter", "Strategy", "Visual-Novel"]

// Add the update function as a listener
$(function() {
    $('.filter-dropdown').change(function() {
        update_games_filter();
    });
    $('#search').on('input', function() {
        update_games_filter();
    });
});

// Update listed games to match ALL tags requested
function update_games_filter() {
    // Figure out which tags are enabled
    var applied_tags = [];
    var dropdownDivs = $('.filter-dropdown');
    var dropdowns = [];
    dropdownDivs.each(function(index, dropdown) {
        // get the dropdown item
        dropdowns.push(dropdown.childNodes.item(1));
    });

    for (var dropdown of dropdowns) {
        if (dropdown.selectedIndex > 0) {
            var tag = (dropdown.id == "dropdown_awards") ? "_award-tag" : "_game-tag";
            var class_to_keep = dropdown.value + tag;
            applied_tags.push(class_to_keep);
        }
    };

    // Disable all listed games which don't have ALL of those tags
    var games_listed = $('.listed_game');
    var num_games_found = 0;

    games_listed.each(function(index, game) {
        var element = $(game);
        var length = applied_tags.length;
        for (var i=0; i < length; i++) {
            var class_to_keep = applied_tags[i];
            if (class_to_keep == "Untagged_game-tag") {
                for (var g of debug) {
                    if (element.hasClass(g + "_game-tag")) {
                        element.css("display", "none");
                        return;
                    }
                }
            }
            else if (!element.hasClass(class_to_keep)) {
                element.css("display", "none");
                return;
            }
        }

        // Added: Disable games which don't match search conditions if there are any
        var search_terms = element[0].querySelector('.listed-game-preview-overlay').children;
        var title = search_terms[0].textContent.toUpperCase();
        var members = [];
        var count = 2;
        while (count < search_terms.length - 1) {
            members += search_terms[count].textContent.toUpperCase();
            count++;
        }
        var desc = search_terms[search_terms.length - 1].textContent.toUpperCase();

        // Convert the term to all uppercase and compare it to the search terms
        var terms = $('#search').val().toUpperCase().split(' ');
        for (let i=0; i < terms.length; i++) {
            let term = terms[i];
            if (!(title.includes(term) || members.includes(term) || desc.includes(term))) {
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

// refresh on page load
for (var i = 1; i < 4; i++)
    setTimeout(() => { update_games_filter(); }, 100 * i * i);