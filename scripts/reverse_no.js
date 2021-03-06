// Script to handle dynamic functionality for play/reverse_no.html

var basicPrompts = [
	// Descriptors
	"Hard", "Bad", "Shape", "Smart", "Light",

	// Basic things
	"Death", "Water", "Green", "Plant", "Arm", "Time", "Two", "Phone", "Sun",
	"Sleep", "Eat", "Run", "Sick", "Neighbor", "Circle", "Conflict", "Sweet",
	"Planet", "Moon", "Cloud", "Sound", "Rain", "Truth",

	// Categories
	"Human", "Movie", "Game", "Book", "Art", "History", "Animal"
]

var challengePrompts = [
	// Movies
	"E.T.", "Frankenstein", "Silence of the Lambs", "Harry Potter", "Wizard of Oz",
	"Titanic", "The Spongebob Squarepants Movie", "Indiana Jones", "Toy Story",
	"Star Wars", "Jaws", "Shrek", "The Matrix", "Frozen", "The Lion King", "It",
	"The Lion, the Witch, and the Wardrobe", "2001: A Space Odyssey", "Cinderella",

	// People/Characters
	"Mario", "Jesus Christ", "Steve Jobs", "Sherlock Holmes", "The Power Rangers",
	"Michael Jackson", "Genghis Khan", "Ronald McDonald", "Barack Obama", "Iron Man",
	"Captain America", "The Queen of England", "Van Gogh", "The Beatles",

	// Places/locations
	"Airport", "Food Market", "Nature park", "Graveyard", "Gym", "Harbor", "School",
	"Movie Theater", "Clock Tower", "Castle",

	// Fairy Tales
	"Little Red Riding Hood", "Rapunzel", "Humpty Dumpty", "Jack and the Beanstalk",

	// Games
	"Call of Duty", "Dungeons and Dragons", "Monopoly", "Football", "Poker", "Solitaire",
	"Civilization", "Candy Crush", "Angry Birds", "Pokemon", "Checkers", "Chess",

	// Books
	"Catch-22", "War and Peace", "1984", "Of Mice and Men",
	"A Tale of Two Cities","Twilight", "Lord of the Rings",
	"A Brief History of the Universe",

	// Art
	"Mona Lisa", "Starry Night", "The Last Supper",

	// Huge
	"When your dentist tries to talk to you when your mouth is full",
	"Sleeping through an important event",
	"A moment that changes how you see the world",
	"Pretending to have read a book when you haven’t",
	"Being stuck in a frustrating adventure game",
	"Realising the answer to a problem as you explain it to someone else",

	// Extraneous
	"Foreign", "Netflix", "The Internet", "Facebook", "Memes", "Hello", "Nostalgia",
	"Stress", "Friend", "Migraine", "Expertise", "Lying", "Waste", "Jazz", "Literally",
	"Passive-Aggressive", "Fairness", "Memory", "A Kiss", "Cuddling", "Awkwardness",
	"Nuclear Bomb", "Mutually Assured Destruction", "Wedding", "Forever",
	"Giraffe", "Musical Chairs", "Tag", "Traffic"
]




// ========== PROMPTS LOGIC ==========

// Replace the text of the prompt text element with a random prompt
function randomBasicPrompt() {
	var textElement = document.getElementById("promptText");
	textElement.innerHTML = getRandBasicPrompt();
}
function randomChallengePrompt() {
	var textElement = document.getElementById("promptText");
	textElement.innerHTML = getRandChallengePrompt();
}

// Get a random prompt
function getRandBasicPrompt() {
	return basicPrompts[Math.floor(Math.random()*basicPrompts.length)];
}
function getRandChallengePrompt() {
	return challengePrompts[Math.floor(Math.random()*challengePrompts.length)];
}

// Init with a random prompt
randomBasicPrompt();


// ========== NOTEPAD LOGIC ==========

// Create a new pair of text fields
// Based on: https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
function addInterpreterField() {
	var container = document.getElementById("pairsInterpreterContainer");
	var pair = document.getElementById("sampleFieldPair");
	var newPair = pair.cloneNode(true);
	newPair.style.display = "flex";
	newPair.id = "realFieldPair";
	container.appendChild(newPair);
}

// Clear all the fields
function clearInterpreterFields() {
	var pair = document.getElementById("sampleFieldPair");
	var newPair = pair.cloneNode(true);

	var container = document.getElementById("pairsInterpreterContainer");
	while (container.hasChildNodes()) {
		var last = container.removeChild(container.lastChild);
	}
	container.append(newPair);

	var newNewPair = newPair.cloneNode(true);
	newNewPair.style.display = "flex";
	container.append(newNewPair);
}

// Init with one visible field
addInterpreterField();
