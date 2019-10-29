// console.log("Hola!");
///////////////////////////////
//////////Our Hero////////////
///////////////////////////////

class Hero {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10,
        }
        this.catchPhrases = ["I'm fresher than day old pizza!", "you can't count my calories!"];
    }
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
    }
    announceHealth(){
    console.log(this.name + " has " + this.health + " health points");
}
    fight(weapon, enemy){
        //console.log("I'm ready to rumble");

        console.log(this.name + " chose to hit " + enemy.name + " with " + weapon + "! " + this.name + " gained " + this.weapons[weapon] + " hit points.");
        enemy.health -= this.weapons[weapon];
        enemy.announceHealth();
}
}
const dougie = new Hero("Dougie the Donut")
console.log(dougie);


///////////////////////////////
//////////Our Hero////////////
///////////////////////////////

class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = ["I'm youtube famous!", "I'm more dangerous than an uncovered sewer!"];
    }
    talkSmack(){
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
    }
    announceHealth(){
        console.log(this.name + " has " + this.health + " health points");
    }
    fight(weapon, enemy){
        console.log(this.name + " chose to hit " + enemy.name + " with " + weapon + "! " + this.name + " gained " + this.weapons[weapon] + " hit points");
        enemy.health -= this.weapons[weapon];
        enemy.announceHealth();
    }
}

const richie = new Enemy("Richie the Rat")
console.log(richie);

///////////////////////////////
////Walking Down the Street////
///////////////////////////////

//first run in with richie the rat

dougie.talkSass();
richie.talkSmack();
dougie.announceHealth();
richie.announceHealth();

///////////////////////////////
//////////Fight///////////////
///////////////////////////////

//upgrade fight methods to access one of their weapons and log its hit points
//use hit points methose from weapon they are using and subtract that many health points from enemy.
//log enemys new health

//1. have richie the rat fight dougie
richie.fight("cheeseGrease", dougie);
//2. have dougie fight pizza Rat
dougie.fight("sugarShock", richie)
//3. have richie and dougie both announceHealth to check health has decreased
richie.announceHealth();
dougie.announceHealth();
