import { Character, NasaEngineer, MasterCarpenter, JavascriptDeveloper } from './../js/characters.js';

describe('Character', function() {
  it('should test if karma is working', function() {
    let character = new Character("Donna", "Cafeteria Lady");
    expect(character.playerName).toEqual("Donna");
  });


});
