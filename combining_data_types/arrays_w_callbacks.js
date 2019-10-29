/////////////////////////////////
//Array Methods with Callbacks//
///////////////////////////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


////////Every

///1
const numsGreaterThan = (numbers) => {
    if(numbers >= 0){
        return true
    } else {
    return false;
    }
}
////using the .map method as mentioned in homework. still wrapping my head around it. Used w3, mdn and other dives into map method.
let checkNums = nums.map(numsGreaterThan);
console.log(checkNums);

/////2
const shorterWords = (words) => {
    if(words.length >= 8){
        return true;
    } else {
        return false;
    }
}
let checkWords = panagram.map(shorterWords);
console.log(checkWords);

///////////////Filter

////1
// const filterNums = (numbers) => {
//     if(numbers < 4){
//
//     }
// }

////////Was going to work on the function below but I got a late start on the homework this time around. Brain slowed down significantly.

//so instead of map function just used what I already knew

/////was in the thinking process for using a map function vs a filter function. I used W3 to try to understand syntax for map...but still need to do more research

//let filterNums = nums.filter(nums < 4)
//console.log(nums);

const lessThanFour = (num) => {
    return num < 4;
}
console.log(nums.filter(lessThanFour));

///filter words with even length

const wordsEvenLength = (string) => {
    return string.length % 2 === 0;
}
console.log(panagram.filter(wordsEvenLength));


///the rest seems straight forward. but my brain is KO right now.
//will see if I get up early enought to finish
