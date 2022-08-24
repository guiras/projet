var ball= 0;
var buttonvalue= 1;
var alerts= "pas asser de ball";
var minions = [
    { id: 1, name: "Suarez", cost: 10, gps: 1, owned: 0 },
    { id: 2, name: "Mbappe", cost: 100, gps: 10, owned: 0 },
    { id: 3, name: "Benzema", cost: 500, gps: 50, owned: 0 },
    { id: 4, name: "Lewandoski", cost: 1000, gps: 100, owned: 0 },
    { id: 5, name: "Messi", cost: 5000, gps: 500, owned: 0 },
    { id: 6, name: "Ronaldo", cost: 10000, gps: 1000, owned: 0 },
    { id: 6, name: "Griezman", cost: 50000, gps: 5000, owned: 0 }
];

function addGold(x) {
    ball = ball+ buttonvalue;
}
function displayGold() {
    ball = ball+ buttonvalue;
    document.getElementById("Gold").innerHTML = "Ball: " + ball;
}
function addGPS(){
    gps = gps+ buttonvalue;
    document.getElementById("Gold").innerHTML = "Ball: " + gps;
}

function getGPS() {
minions.forEach(function (minion){
    console.log(minion.name);
    console.log(minion.cost);
    console.log(minion.gps);
})

} 

    
