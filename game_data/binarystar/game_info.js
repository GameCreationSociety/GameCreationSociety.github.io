var game_info = {
    "name" : "Binary Star",
    "description" : "Test description"
}

if (typeof games !== "undefined") {
    games.push(game_info);
    console.log("Added game. Now:");
    console.log(games);
} else {
    document.title = game_info.name + " | Game Creation Society";
}
