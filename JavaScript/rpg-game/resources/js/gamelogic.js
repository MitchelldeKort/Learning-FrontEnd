//let name1 = document.getElementById("name1");
//let name2 = document.getElementById("name2");

//let items1 = document.getElementById("items1");
//let items2 = document.getElementById("items2");

//let race1 = document.getElementById("race1");
//let race2 = document.getElementById("race2");

//let create = document.getElementById("create1");
//create.addEventListener("click", generatePlayers);

function generatePlayers(event) {
    let player1 = new Person(name1.value, items1.value, race1.value);
    let player2 = new Person(name2.value, items2.value, race2.value);
    
    
    console.dir(player1);
    console.dir(player2);
}