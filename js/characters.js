

export class Character {
  constructor(playerName, characterType) {
  this.playerName = playerName;
  this.characterType = characterType;
  }
  // showCharacter() {
  //   if (this.characterType === "Nasa Engineer")
  //   return characterType;
  // } else if {
  //   (this.characterType === "Master Carpenter")
  //   return characterType;
  // } else if {
  //   (this.characterType === "JavaScript Developer")
  //   return characterType;
  // }
}

export class NasaEngineer {
  constructor(health, strength, intelligence, motto, magic, weapon) {
    this.health = 7;
    this.strength = 3;
    this.intelligence = 10;
    this.motto = "To the future";
    this.magic = "gravity";
    this.weapon = "black holes";
  }
}

export class MasterCarpenter {
  constructor(health, strength, intelligence, motto, magic, weapon) {
    this.health = 5;
    this.strength = 10;
    this.intelligence = 6;
    this.motto = "it's hammer time";
    this.magic = "roof jumping";
    this.weapon = "nail gun";

  }
}

export class JavascriptDeveloper {
  constructor(health, strength, intelligence, motto, magic, weapon) {
    this.health = 4;
    this.strength = 5;
    this.intelligence = 9;
    this.motto = "cool cool cool sweet sweet sweet";
    this.magic = "code";
    this.weapon = "hacking";

  }
}
