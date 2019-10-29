/////////////////////////////////////////
///////Creating Classes//////////////////
/////////////////////////////////////////

///creating first class Hamster
class Hamster {
    constructor (name) {
        this.owner = "";
        this.name = name;
        this.price = 20;
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
        console.log("nible nible");
    }
    getPrice(){
        return this.price;
    }
}

//////////creating another class Person

class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log("Hello " + this.name + ", how are you today?");
    }
    eat(){
        this.weight++;
        this.mood++;
        console.log(this.name + " is now " + this.weight + " lbs," + " and has " + this.mood + " mood points.");
    }
    exercise(){
        this.weight--
        console.log("Congrats" + this.name + "! You lost some weight and are now " + this.weight + "lbs!");
    }
    ageUp(){
        this.age++;
        this.weight++;
        this.height++;
        this.mood--;
        this.bankAccount +=10;

        console.log(this.name + " is now " + this.age + " years old, " + this.height + " feet tall, " + this.weight + "lbs, with mood points of " + this.mood + ", and now has $" + this.bankAccount + ".");
    }
    buyHamster(hamster) {
            this.hamsters.push(hamster);
            this.mood += 10;
            this.bankAccount -= hamster.getPrice();

    }
}

//const newHamster = new Hamster("Gary", "Lary", 20);
//const newPerson = new Person();

//1. Instantiate a new Person named Tmmy
const timmy = new Person("Timmy")
timmy.greet();

//2. Age Timmy five years
for(i=0; i<5; i++){
timmy.ageUp();
}

//3. Timmy is bummed. he feel's he's seen it all. have him eat 5 times
for(i=0; i<5; i++){
timmy.eat(5);
}
//4. Timmy is a little heavier than he wants. help him look good by exercising 5 times.
for(i=0; i<5; i++){
timmy.exercise(5);
}
//5. Age timmy 9 years
for(i=0; i<9; i++){
timmy.ageUp(9);
}
// 6. Create a hamster named Gus
const gus = new Hamster("Gus");
console.log(gus);

//set gus's owner to the string timmy
gus.owner = "Timmy"
console.log(gus);
//8. set Gus's owner to string "Timmy"
timmy.buyHamster(gus)
console.log(timmy);

// //9. Age Timmy 15 years
for(i=0; i<15; i++){
timmy.ageUp(15);
}
//10. Have Timmy eat twice
for(i=0; i<2; i++){
timmy.eat(2);
}
//11. Have Timmy exercise twice
for(i=0; i<2; i++){
 timmy.exercise(2);
}
console.log(timmy);
// console.log(timmy);
// // console.log(newHamster);
// // newHamster.wheelRun();
// // newHamster.eatFood();
// //newHamster.getPrice();
// // console.log(newPerson);
// // newPerson.getName();
// // newPerson.getAge();
// // newPerson.getWeight();
// // newPerson.greet();
// // newPerson.eat(1);
// // newPerson.exercise(2);
// // newPerson.ageUp(3);
// //console.log(newPerson.buyHamster());
