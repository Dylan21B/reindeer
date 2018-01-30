var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var colorSize = colors.length;
var reindeerCount = reindeer.length;

var colorReindeer = "";

for (var i = 0; i < reindeerCount; i++) {   //creates loop and only once

      colorReindeer += colors[i] + " " + reindeer[i] + "<br>";

}

var hohohoElement = document.getElementById("reindeer");

document.getElementById("reindeer").innerHTML = colorReindeer;


