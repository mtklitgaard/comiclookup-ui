var myCharacters = Alloy.Collections.characters;

var character = Alloy.createModel('characters', {
characterName : "Hooba",
image: "imageTestHooba"	
});

myCharacters.add(character);
character.save();

function showCharacter(event)
{
	var selectedCharacter = event.source;
	var args = {
		characterName: selectedCharacter.characterName,
		image: selectedCharacter.image
	};
	
	var characterview = Alloy.createController("characterdetails",args).getView();
	characterview.open();
}

function doClick(e) {
    alert($.label.text);
}

$.index.open();
