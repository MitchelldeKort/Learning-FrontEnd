//character generating script
function Person(name, item, race){
    this.name = name;
    this.race = race;
    this.item = item;   
    
    switch (true) { //stats for race and items
        case (race == `orc`): //orc has increased healt , but less healthregen
            this.currentHealth = 120;
            this.maxHealth = 120;
            switch (true) { 
                case (item == `boots`): //increased dodge chance  
                    this.minDamage = 3;
                    this.minHealing = 0;
                    this.maxDamage = 20;
                    this.maxHealing = 27;
                    this.dodgeChance = 6;
                    this.critChance = 16; 
                    break;
                case (item == `staff`): //increased healing
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 8;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `sword`): //increased damage
                    this.minDamage = 6;
                    this.minHealing = 0;
                    this.maxDamage = 23;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `bow`): //increased hit chance (chance to strike twice)
                    this.minDamage = 3;
                    this.minHealing = 0;
                    this.maxDamage = 20;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
            break;
        case (race == `elf`): // elves have twice the chance to dodge , but lower health
            this.currentHealth = 90;
            this.maxHealth = 90;
            switch (true) { 
                case (item == `boots`): 
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 30;
                    this.dodgeChance = 4;
                    this.critChance = Math.floor((Math.random() * 16) + 1); 
                    break;
                case (item == `staff`): 
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 6;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `sword`): 
                    this.minDamage = 6;
                    this.minHealing = 3;
                    this.maxDamage = 23;
                    this.maxHealing = 30;
                    this.dodgeChance = 6;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `bow`): 
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 30;
                    this.dodgeChance = 6;
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
            break;
        case (race == `human`): // higher damage and healing , but lower max/crit
            this.currentHealth = 100;
            this.maxHealth = 100;
            switch (true) { 
                case (item == `boots`): 
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 6;
                    this.critChance = Math.floor((Math.random() * 16) + 1); 
                    break;
                case (item == `staff`): 
                    this.minDamage = 6;
                    this.minHealing = 9;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `sword`): 
                    this.minDamage = 9;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `bow`): 
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
            break;
        case (race == `vampire`): // increased healing , but lower dodge chance
            this.currentHealth = 110;
            this.maxHealth = 110;
            switch (true) { 
                case (item == `boots`): 
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 10;
                    this.critChance = Math.floor((Math.random() * 16) + 1); 
                    break;
                case (item == `staff`): 
                    this.minDamage = 3;
                    this.minHealing = 9;
                    this.maxDamage = 20;
                    this.maxHealing = 36;
                    this.dodgeChance = 12;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `sword`): 
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 23;
                    this.maxHealing = 33;
                    this.dodgeChance = 12;
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == `bow`): 
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 12;
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
        default:
            this.currentHealth = 100;
            this.maxHealth = 100;
    }


    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total healthpoints are ${this.maxHealth}`);
    };
}


let stats1 = document.getElementById(`stats1`);
let stats2 = document.getElementById(`stats2`);

let name1 = document.getElementById(`name1`);
let name2 = document.getElementById(`name2`);

let items1 = document.getElementById(`items1`);
let items2 = document.getElementById(`items2`);

let race1 = document.getElementById(`race1`);
let race2 = document.getElementById(`race2`);

let combatWindow1 = document.getElementById(`combatSumm1`);
let combatWindow2 = document.getElementById(`combatSumm2`);
let healthData1 = document.getElementById(`healthData1`);
let healthData2 = document.getElementById(`healthData2`);
let moves1 = document.getElementById(`moves1`);
let moves2 = document.getElementById(`moves2`);
let currentHealth1 = document.getElementById(`currentHealth1`);
let currentHealth2 = document.getElementById(`currentHealth2`);
let maxHealth1 = document.getElementById(`maxHealth1`);
let maxHealth2 = document.getElementById(`maxHealth2`);

let log = document.getElementById(`log`);

let combatSumm1 = document.getElementById('combatSumm1');
combatSumm1.style.display = ``;
combatSumm2.style.display = ``;
log.style.display = `none`;    

let create = document.getElementById(`create1`);
create.addEventListener(`click`, generatePlayers);

function generatePlayers(event) {
    

    let player1 = new Person(name1.value, items1.value, race1.value);
    let player2 = new Person(name2.value, items2.value, race2.value);

    let playerHeader1 = document.getElementById(`player1`);
    let playerHeader2 = document.getElementById(`player2`);

    let raceDisplay1 = document.getElementById("raceDisplay1");
    let raceDisplay2 = document.getElementById("raceDisplay2");
    let itemDisplay1 = document.getElementById("itemDisplay1");
    let itemDisplay2 = document.getElementById("itemDisplay2");

    raceDisplay1.innerHTML = `Race: ${player1.race}`;
    raceDisplay2.innerHTML = `Race: ${player2.race}`;
    itemDisplay1.innerHTML = `Item: ${player1.item}`;
    itemDisplay2.innerHTML = `Item: ${player2.item}`;

    player1.innerHTML = player1.name;
    player2.innerHTML = player2.name;

    let attack1 = document.getElementById(`attack1`);
    attack1.addEventListener(`click`, attackOpponent);
    let attack2 = document.getElementById(`attack2`);
    attack2.addEventListener(`click`, attackOpponent);

    let heal1 = document.getElementById(`heal1`);
    heal1.addEventListener(`click`, healSelf);
    let heal2 = document.getElementById(`heal2`);
    heal2.addEventListener(`click`, healSelf);

    let yield1 = document.getElementById(`yield1`);
    let yield2 = document.getElementById(`yield2`);

    yield1.addEventListener(`click`, forfaitGame);
    yield2.addEventListener(`click`, forfaitGame);

    let whoGoesFirst = Math.floor((Math.random() * 2) + 1);

    console.log(whoGoesFirst);

    if (whoGoesFirst == 1) { // generates wich player goes first (always random)
        log.innerHTML += `${player1.name} goes first <br/>`
        attack2.style.pointerEvents = `none`;
        heal2.style.pointerEvents = `none`;
        yield2.style.pointerEvents = `none`;
        scrollLog()
    } else {
        log.innerHTML += `${player2.name} goes first <br/>`
        attack1.style.pointerEvents = `none`;
        heal1.style.pointerEvents = `none`;
        yield1.style.pointerEvents = `none`;
        scrollLog()
    }
    
    
    let healthBar1 = document.getElementById(`health1`);
    let healthBar2 = document.getElementById(`health2`);

    healthBar1.value = player1.currentHealth;
    healthBar1.max = player1.currentHealth;
    healthBar2.value = player2.currentHealth;
    healthBar2.max = player2.currentHealth;
    
    console.log(player1.minDamage);

    
    combatSumm1.style.display = ``;
    combatSumm2.style.display = ``;
    log.style.display = ``;

    stats1.style.display = `none`;
    stats2.style.display = `none`;
    create.style.display = `none`;

    currentHealth1.innerHTML = `currentHealth: ` + player1.currentHealth;
    maxHealth1.innerHTML = `maxHealth ` + player1.maxHealth;

    currentHealth2.innerHTML = `currentHealth: ` + player2.currentHealth;
    maxHealth2.innerHTML = `maxHealth ` + player2.maxHealth;

    

    function forfaitGame(event) { //displays the name of the player wich forfeits
        
        var el = document.createElement(`div`);
        el.setAttribute(`style`,`position:absolute;top:10%;left:36%;background-color:white;`);

        if(event.target.id == `yield1`) {
            el.innerHTML = `${player1.name} forfaited the game. Resetting`;
            Object.getOwnPropertyNames(player1).forEach(function (prop) {
                delete player1[prop];
            });

            Object.getOwnPropertyNames(player2).forEach(function (prop) {
                delete player2[prop];
            });
        } else {
            el.innerHTML = `${player2.name} forfeited the game. Resetting`;
            Object.getOwnPropertyNames(player1).forEach(function (prop) {
                delete player1[prop];
            });

            Object.getOwnPropertyNames(player2).forEach(function (prop) {
                delete player2[prop];
            });
        }        
        
        document.body.appendChild(el);
       
        setTimeout(function(){el.parentNode.removeChild(el);},3000);

        setTimeout(resetGame, 4000);
    }

    function scrollLog () {
        log.scrollTop = log.scrollHeight - log.clientHeight; // scrollable displaylog
    }

    function attackOpponent(event) {
        let doneDamage;

        if(event.target.id == `attack1`) {

            attack2.style.pointerEvents = `auto`;
            heal2.style.pointerEvents = `auto`;
            yield2.style.pointerEvents = `auto`;

            attack1.style.pointerEvents = `none`;
            heal1.style.pointerEvents = `none`;
            yield1.style.pointerEvents = `none`;

            doneDamage = Math.round(Math.random() * (player1.maxDamage - player1.minDamage)) + player1.minDamage;
            

            switch (true) {
                case (player2.race == `elf`):
                        if (player2.item == `boots`) {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 2) {
                                        log.innerHTML += `${player2.name} dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        } else {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 3) {
                                        log.innerHTML += `${player2.name} dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        }
                    break;
                case (player2.race == `vampire`):
                        if (player2.item == `boots`) {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 5) {
                                        log.innerHTML += `${player2.name} dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        } else {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 6) {
                                        log.innerHTML += `${player2.name} dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        }
                default:
                        if (player2.item == `boots`) {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 3) {
                                        log.innerHTML += `${player2.name} dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        } else {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 4) {
                                        log.innerHTML += `${player2.name} dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        }
            }

            function didYouCrit () {
                switch (true) {
                    case (player1.item == "bow"):
                        if (Math.floor((Math.random() * player1.critChance) + 1) == 5) {
                            return true;                            
                        } else {
                            return false;
                        }                    
                    default:
                        if (Math.floor((Math.random() * player1.critChance) + 1) == 8) {
                            return true;                            
                        } else {
                            return false;
                        }                    

                }
                      
            }
            

   