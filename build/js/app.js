(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = exports.Character = function Character(playerName, characterType) {
  _classCallCheck(this, Character);

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
;

var NasaEngineer = exports.NasaEngineer = function NasaEngineer(health, strength, intelligence, motto, magic, weapon) {
  _classCallCheck(this, NasaEngineer);

  this.health = 7;
  this.strength = 3;
  this.intelligence = 10;
  this.motto = "To the future";
  this.magic = "gravity";
  this.weapon = "black holes";
};

var MasterCarpenter = exports.MasterCarpenter = function MasterCarpenter(health, strength, intelligence, motto, magic, weapon) {
  _classCallCheck(this, MasterCarpenter);

  this.health = 5;
  this.strength = 10;
  this.intelligence = 6;
  this.motto = "it's hammer time";
  this.magic = "roof jumping";
  this.weapon = "nail gun";
};

var JavascriptDeveloper = exports.JavascriptDeveloper = function JavascriptDeveloper(health, strength, intelligence, motto, magic, weapon) {
  _classCallCheck(this, JavascriptDeveloper);

  this.health = 4;
  this.strength = 5;
  this.intelligence = 9;
  this.motto = "cool cool cool sweet sweet sweet";
  this.magic = "code";
  this.weapon = "hacking";
};

},{}],2:[function(require,module,exports){
'use strict';

var _characters = require('./../js/characters.js');

$(document).ready(function () {

  $('#new-game-start').submit(function (event) {
    event.preventDefault();
    var playerName = $('#player-name').val();
    var characterType = $('#character-selection').val();
    var gamePlayer = new _characters.Character(playerName, characterType);
    var engineer = new _characters.NasaEngineer(health, strength, intelligence, motto, magic, weapon);
    var carpenter = new _characters.MasterCarpenter(health, strength, intelligence, motto, magic, weapon);
    var developer = new _characters.JavascriptDeveloper(health, strength, intelligence, motto, magic, weapon);

    $('.round-one').append("<li>Player Name: " + playerName + "</li>" + "<li>Character Type: " + characterType + "</li>");
    showCharacter();
  });
});

},{"./../js/characters.js":1}]},{},[2]);
