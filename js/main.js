var model = { boardSize: 7,
numShips: 3,
shipsSunk: 0,
shipLength: 3,
ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
{ locations: ["24", "34", "44"], hits: ["", "", ""] }, { locations: ["10", "11", "12"], hits: ["", "", ""] } ],
fire: function(guess) {
for (var i = 0; i < this.numShips; i++) {
var ship = this.ships[i];

var locations = ship.locations;
var index = locations.indexOf(guess); if (index >= 0) {
ship.hits[index] = "hit";
return true; }
   }
return false;
} };
