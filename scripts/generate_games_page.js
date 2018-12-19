console.log("Now generating each game");
var parent = document.getElementById("games-container")

for (index in games) {
    var game_info = games[index];
    console.log(game_info);

    var new_game_element = document.createElement("div");
    new_game_element.appendChild(document.createTextNode(game_info.name));
    new_game_element.appendChild(document.createElement("br"));
    new_game_element.appendChild(document.createTextNode(game_info.description));

    parent.appendChild(new_game_element);
}
