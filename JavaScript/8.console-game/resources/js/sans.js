//*****************Sans VISUAL******** ******** */
let sansArt = document.getElementById('sans');

sansArt.onmouseover = function () {
    sansArt.classList.add('leftEyeWink');
}
sansArt.onmouseleave = function () {
    sansArt.classList.remove('leftEyeWink');
}

//***************TYPEWRITER & PUNS******************** */


function randomPun(list) {
    let pun = list[Math.floor(Math.random() * list.length)];
    document.getElementById("text").innerHTML = ''
    letterI = 0;
    txt = pun;
    typeWriter();
}

let letterI = 0;
let speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (letterI < txt.length) {
        if (txt.charAt(letterI) !== ' ' && soundOn === true) {
            let audio = new Audio('resources/sound/voice_sans.mp3');
           // audio.play();
            
        }
        document.getElementById("text").innerHTML += txt.charAt(letterI);
        letterI++;
        setTimeout(typeWriter, speed);
    }
}

//**************Sound handler****************** */

let soundBut = document.getElementById('sound');
let soundOn = true;

let musicBut = document.getElementById('music');
let musicOn = true;


soundBut.onclick = toggleSound;

function toggleSound() {
    if (soundOn == true) {
        soundBut.innerHTML = 'Sound:off';
        soundOn = false;
    } else {
        soundBut.innerHTML = 'Sound:on';
        soundOn = true;
    }
    
}

musicBut.onclick = themeSong;

    function themeSong() {
        if (musicOn == true) {
            musicBut.innerHTML = 'music:on';
            musicOn = false;
        let audio = document.getElementById('themeSong');
        audio.play();
        } else {
            musicBut.innerHTML = 'music:off';
            musicOn = true;
        let audio = document.getElementById('themeSong');
        audio.pause();
        }
    }


startpun = [`So..           Nick told me you would come.                                 Well  what are you waiting for? Write this code!  `]
randomPun(startpun);

let dont = [];
dont.push(document.getElementById('d'));
dont.push(document.getElementById('o'));
dont.push(document.getElementById('n'));
dont.push(document.getElementById('t'));


for (let i = 0; i < dont.length; i++) {
    dont[i].onclick = function () {
        let pen = document.createElement('div');
        pen.classList.add('pen');
        document.body.append(pen);
    }
}
//moves list//

let you = {
    "race" : "god",
    "type" : "big sad",
    "moves" : "attack" + "heal",
    "health" : 100,

    heal: function() {
        let yourhealth = this.health + Math.floor(Math.random() * (20 - 8)) + 8;
        return yourhealth;
        
        },

        attack: function(){
           let sanshealth = sans.health - Math.floor(Math.random() * (120 - 20)) - 20;
           return sanshealth;

        
        },
        function:rollCriticalChance(){
            criticalChance = Math.floor(Math.random() * 240) + 40
}

let sans = {
    "race" : "monster",
    "type" : "skeleton",
    "moves" : "attack" + "heal",
    "health" : 1000,

    heal: function() {
        let sanshealth = this.health + Math.floor(Math.random() * (80 - 40)) + 40;
        return sanshealth;
        
        },

        attack: function(){
           let yourhealth = your.health - Math.floor(Math.random() * (15 - 10)) - 10;
           return yourhealth;
        };
        function:rollCriticalChance() {
            criticalChance = Math.floor(Math.random() * 30) + 20
}

var players = ("attack","heal",100);
var monsters = ("attack", "heal", 1000);
    
// random pun generator//

function loadText(){
    // XHR Obj.

    var xhr = new XMLHttpRequest();
    // OPEN - type , url/file, true/false (async)
   xhr.open('GET', 'resources/js/puns.js', true);
   

 xhr.onload = function(){
    if (this.status == 200){
        let quote = JSON.parse(this.responseText);

        let output = '';
        

