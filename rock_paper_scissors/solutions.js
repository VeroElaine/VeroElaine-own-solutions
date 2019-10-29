//1. Difference between parameter and an argument:
//a parameter is the variable in a method..in the declaration of function
//an argument is the data passed into the methods's parameters. The actual value of the variable passed to the function

//2. within a function, what is the difference between return and console.log
//console lo is a function that logs the arguments you pass to the web console
//return is a statement which specifies the value returned form a function. when return conditions met it exits out.

////////////////
//Palindrome
///////////////
const checkPalindrom = (string) => {
    reverseString = string.split("").reverse().join("");
    if(string.toLowerCase()==reverseString.toLowerCase()){
        return true;
    }
    return false;
}

console.log(checkPalindrom("Radar"));
console.log(checkPalindrom("Borscht"));

////////////////////
//Sum Array
///////////////////

const sumArray = (nums) => {
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

//////////////////////
//Prime Number
/////////////////////

//2,3,5,7,11
const checkPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) {
        return false;
    }
    return true;
  }
}
console.log(checkPrime(17));

const printPrimes = (num) => {
    for (let i = 2; i <=  num; i++) {
        if (checkPrime(i) === true) {
            console.log(i);
        }
    }
}
printPrimes(97);

//////////////////////
//Rock Paper Scissors
/////////////////////
let move = ["rock", "paper", "scissors"];
const randomMove = () => {
      let newPlay = Math.floor(Math.random()*move.length);
      return move[newPlay];
};
let computerMove = randomMove();
let userMove = randomMove();

const rockPaperScissors = (userMove, computerMove) => {
    console.log("User chose " + userMove );
    console.log("Computer chose " + computerMove);
    if (userMove === computerMove){
        console.log("It's a draw! Play again!");
        
    } else if (userMove ==="rock") {
        switch (computerMove) {
            case "paper" :
            return console.log("Paper beats rock! Computer wins!");
            case "scissors" :
            return console.log("Rock beats scissors! User wins!");
        }
    } else if (userMove === "paper") {
        switch (computerMove) {
            case "rock" :
            return console.log("Rock beats paper! Computer wins!");
            case "scissors" :
            return console.log("Scissors beats paper! Computer wins!");
        }
    } else if (userMove === "scissors") {
        switch (computerMove) {
            case "rock" :
            return console.log("Rock beats scissors! Computer wins");
            case "paper" :
            return console.log("Scissory beats paper! User wins!");
        }
    }
}

 rockPaperScissors(userMove, computerMove);
