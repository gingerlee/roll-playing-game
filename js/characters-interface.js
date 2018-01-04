import { Character, NasaEngineer, MasterCarpenter, JavascriptDeveloper } from './../js/characters.js';


$(document).ready(function() {

  $('#new-game-start').submit(function(event) {
    event.preventDefault();
    let playerName = $('#player-name').val();
    let characterType = $('#character-selection').val();
    const gamePlayer = new Character(playerName, characterType);

    $('.round-one').append("<li>Player Name: " + playerName + "</li>" +
                          "<li>Character Type: " + characterType + "</li>"
                          );
                          
  });

});
