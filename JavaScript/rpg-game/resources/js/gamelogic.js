let play = document.getElementById('play');
play.addEventListener('click', createPlayers);

let player1;
let player2;

let log = document.getElementById("log");
function createPlayers(){
    let race1 = document.getElementById('race1').value;
    let name1 = document.getElementById('name1').value;
    if (document.getElementById('name1').value == '') {
        name1='Player1'
    }
    let weapon1 = document.getElementById('weapon1').value;
    player1 = new Person(name1,race1,weapon1);
    switch (player1.race) {
        case 'human':
            document.getElementById('displayrace1').src = '/resources/images/human2.jpg'
            document.getElementById('displayrace1C').innerHTML = 'human'    
        break;
    
        case "orc":
            document.getElementById('displayrace1').src= '/resources/images/orc1.jpg'
            document.getElementById('displayrace1C').innerHTML = 'orc'    
        break;
        case "elf":
            document.getElementById('displayrace1').src= '/resources/images/elf1.jpg'
            document.getElementById('displayrace1C').innerHTML = 'elf'    
        break;
        case 'vampire':
            document.getElementById('displayrace1'). src= '/resources/images/vampire.jpg'
            document.getElementById('displayrace1C').innerHTML = 'vampire'   
        break;

    }
    switch (player1.item) {
        case 'boots':
            document.getElementById('displayitem1C').innerHTML = 'boots'    
        break;
    
        case "staff":
            document.getElementById('displayitem1C').innerHTML = 'staff'    
        break;
        case "sword":
            document.getElementById('displayitem1C').innerHTML = 'sword'    
        break;
        case 'bow':
            document.getElementById('displayitem1C').innerHTML = 'bow'  
        break;

    }
    document.getElementById('named1').innerHTML= name1
    let race2 = document.getElementById('race2').value;
    let name2 = document.getElementById('name2').value;
    if (document.getElementById('name2').value == '') {
        name2='Player2'
    }
    let weapon2 = document.getElementById('weapon2').value;
    player2 = new Person(name2,race2,weapon2);
    switch (player2.race) {
        case 'human':
            document.getElementById('displayrace2').src= '/resources/images/human1.jpg'
            document.getElementById('displayrace2C').innerHTML = 'human'   
        break;
    
        case "orc":
            document.getElementById('displayrace2').src='/resources/images/orc2.jpeg'
            document.getElementById('displayrace2C').innerHTML = 'orc'   
        break;
        case "elf":
            document.getElementById('displayrace2').src='/resources/images/elf2.jpeg' 
            document.getElementById('displayrace2C').innerHTML = 'elf'  
        break;
        case 'vampire':
            document.getElementById('displayrace2').src='/resources/images/vampire.jpg'
            document.getElementById('displayrace2C').innerHTML = 'vampire'    
        break;

    }
    switch (player2.item) {
        case 'boots':
            document.getElementById('displayitem2C').innerHTML = 'boots'  
        break;
    
        case "staff":
            document.getElementById('displayitem2C').innerHTML = 'staff'
        break;
        case "sword":
            document.getElementById('displayitem2C').innerHTML = 'sword'
        break;
        case 'bow':
            document.getElementById('displayitem2C').innerHTML = 'bow'    
        break;

    }
    
    document.getElementById('named2').innerHTML= name2
    document.getElementById('play').style.display = 'none'
    document.getElementById('play').style.display = 'none';
    document.getElementById('title').innerHTML = "  FIGHT!"
    document.getElementById("battlefield").style.display = "flex"
    document.getElementById('attack2').addEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    log.insertAdjacentHTML("afterbegin",`${player1.name} is a ${player1.race}, he wields a ${player1.item}, his total health points are ${player1.maxHealth}.`+"<br>");
    log.insertAdjacentHTML("afterbegin",`${player2.name} is a ${player2.race}, he wields a ${player2.item}, his total health points are ${player2.maxHealth}.`+"<br>");
    updatehealth();
    console.log(player1,player2);
    
}
// active healthbar
function updatehealth() {
    document.getElementById("health1").value = player1.currenthealth;
    document.getElementById("health1").max = player1.maxHealth;
    document.getElementById("health2").value = player2.currenthealth;
    document.getElementById("health2").max = player2.maxHealth;
    document.getElementById("healthtext1").innerHTML = `${player1.currenthealth}/${player1.maxHealth}`;
    document.getElementById("healthtext2").innerHTML = `${player2.currenthealth}/${player2.maxHealth}`
}
// Needs moar deeeps
let turn = true
function a1() {
    turn = true;
    Damage();
    updatehealth();
    document.getElementById('heal1').removeEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    document.getElementById('attack1').removeEventListener("click",a1);
    document.getElementById('attack2').addEventListener("click",a2);
};
function a2 () {
    turn = false;
    Damage();
    updatehealth()
    document.getElementById('attack2').removeEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById('heal2').removeEventListener("click",h2);
    document.getElementById('heal1').addEventListener("click",h1);
};

function Damage() {
    let you
    let enemy
    if (turn== true) {
        you = player1;
        enemy = player2;
    }
    if (turn == false) {
        you = player2;
        enemy = player1;
    }
    
    let chance = enemy.dodgechance;
    let n = Math.floor(Math.random() * 101); 
    console.log(n)
    if (n < chance) {
        log.insertAdjacentHTML("afterbegin",`${enemy.name} dodged the attack.`+"<br>");
    } else {
        let damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
        enemy.currenthealth -= damage ;
        log.insertAdjacentHTML("afterbegin",`${you.name} did ${damage} damage to ${enemy.name}.`+"<br>");   
    }
    
    if (you.race == "vampire") {
        if (you.currenthealth >= you.maxHealth) {
            you.currenthealth = you.maxHealth;
        }else{
            you.currenthealth += Math.ceil(damage/5)
            log.insertAdjacentHTML("afterbegin",`${you.name} stole ${Math.ceil(damage/5)} health from ${enemy.name} .`+"<br>")
        }
        
    }
    if (you.item == 'bow') {
        let r = Math.random() * 100;
        if (r < 30) {
            damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
            enemy.currenthealth -= damage ;
            log.insertAdjacentHTML("afterbegin",`${you.name} attacked again, and did${damage} damage to ${enemy.name}.`+"<br>");
            if (you.race == "vampire") {
                if (you.currenthealth >= you.maxHealth) {
                    you.currenthealth = you.maxHealth;
                }else{
                    you.currenthealth += Math.ceil(damage/5)
                    log.insertAdjacentHTML("afterbegin",`${you.name} stole ${Math.ceil(damage/5)} health from ${enemy.name} .`+"<br>")
                }
            }
        }
    }

// who goes first random generator

//let whoGoesFirst = Math.floor((Math.random() * 2) + 1);

  //  console.log(whoGoesFirst);

    //if (whoGoesFirst == 1) { 
      //  log.innerHTML += `${player1.name} goes first <br/>`
        //attack2.style.pointerEvents = `none`;
        //heal2.style.pointerEvents = `none`;
        //yield2.style.pointerEvents = `none`;
       // scrollLog()
   // } else {
     //   log.innerHTML += `${player2.name} goes first <br/>`
      //  attack1.style.pointerEvents = `none`;
       // heal1.style.pointerEvents = `none`;
       // yield1.style.pointerEvents = `none`;
        //scrollLog()
   // }




// U succ , wanna try it again?
    if (enemy.currenthealth <= 0) {
        Endgame(enemy);
        
    }
}
function Endgame(enemy) {
    if (enemy == player1) {
        alert("player2 wins")
        log.insertAdjacentHTML("afterbegin",`${player1.name} has won`+"<br>");
    }
    else {
        alert("player1 wins")
        log.insertAdjacentHTML("afterbegin",`${player2.name} has won`+"<br>");
    }
      
    }
    document.getElementById('title').innerHTML = "GAME OVER"
    setTimeout(() => {
        document.getElementById('play').style.display = 'flex'
        document.getElementById('play').style.display = 'inline'
        document.getElementById("battlefield").style.display = "none"
    }, 3000);


// Don't stand in red or green goo nubs -every healer ever
function h1() {
    turn = true;
    Heal();
    updatehealth()
    document.getElementById('heal1').removeEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    document.getElementById('attack1').removeEventListener("click",a1);
    document.getElementById('attack2').addEventListener("click",a2);
};
function h2() {
    turn = false;
    Heal();
    updatehealth()
    document.getElementById('heal2').removeEventListener("click",h2);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById('attack2').removeEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
};
function Heal() {
    let you
    if (turn== true) {
        you = player1;
    }
    if (turn == false) {
        you = player2;
    }
    
    let heal = (Math.round(Math.random()*(you.maxHealing - you.minH +1))+you.minH);
    you.currenthealth += heal
    log.insertAdjacentHTML("afterbegin",`${you.name} healed for ${heal}.`+"<br>");
    if (you.currenthealth >= you.maxHealth) {
        you.currenthealth = you.maxHealth;
    }
}
// y are you running? function
document.getElementById('yield1').addEventListener("click",function () {
    log.insertAdjacentHTML("afterbegin", `${player1.name} has yielded.`+"<br>");
    document.getElementById('title').innerHTML = "GAME OVER"
   
    setTimeout(() => {
        document.getElementById('play').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById('title').innerHTML = "Choose Your Fighter"
        document.getElementById("battlefield").style.display = "none" 
    }, 3000);
    
});
document.getElementById('yield2').addEventListener("click",function () {
    log.insertAdjacentHTML("afterbegin", `${player2.name} has yielded.`+"<br>");
    document.getElementById('title').innerHTML = "GAME OVER"
  
    setTimeout(() => {
        document.getElementById('play').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById("battlefield").style.display = "none" 
    }, 3000);
});
