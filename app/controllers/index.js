var myCharacters = Alloy.Collections.characters;

var character = Alloy.createModel('characters', {
characterName : "Test",
image: "imageTest"	
});

myCharacters.add(character);
character.save();

function doClick(e) {
    alert($.label.text);
}

$.index.open();
