///////////////////////////////////////
/////////////////Answer////////////////
///////////////////////////////////////
//1. DRY:
// Do not repeat your code, if you find you are copying and pasting a lot then their is probably a function/loop/etc. for that
//2. KISS:
//Keep it simple, stupid. write a code that is simple, it most likely means you understand it more than a complex one if you can condense it to 'laymans coding' terms. “The definition of genius is taking the complex and making it simple.” - Albert Einstein
//3. Avoid creating a YAGNI:
//you aren't going to need it. don't use it till it's needed
//4.Don't make me think:
//Again, laymens terms. It shouldn't take much effort to think about what the code is trying to implement. if so, it can be simplified
//5. Write code for the maintainer:
//if the code is worth maintaining in the future then write it as if it is for someone else. make comments and make it simple since future you won't remember it the way you do when yu write it.
//6. Single responsibility principle:
// a component of a code should perform a single well defined task. simple and in well defined steps. this makes the entire function easier to understand as well as easier to write
//7. Avoid premature optimization:
//first write the code. make sure it works. then make it better only if it works slower than you want.
//8. Separation of concerns:
//seperating a computer program into distinct secion where each section addresses a separate concern. This allows for higher degree of freedom for simplification.

//I don't feel any of these surprise me in anyway. I love Einsteins quote on being able to spot genius. It isn't by overly-pretentious people--they tend to hide behind their gaps of knowledge. In simpler terms, if you know it you can explain it to a third grader.

///////////////////////////////////////
////////////Commenting Code ///////////
///////////////////////////////////////

//forms a function defined as f that takes l as a paramter
const f = l => {
//defines es, p, c, and 1 and gives them values
  let es = 0, p = 0, c = 1, n = 0
  //the while loop is created and given the condition while c is less than or equal to the paramter
  while (c <= l) {
    //a new value for n is defines. p added to c
    n = c + p;
    //c redefined to value of n
    [c, p] = [n, c]
    //modulus checking the new value of c is an integer, else statement created. will add es to c if is an even number.
    es += (c % 2 === 0) ? c : 0
  }
  return es //if statement doesn't meet above conditions or is falsey returns es
}

console.log(f(55)) //will log the f function with the paramter of 55

//////
/////I would have call this findEvenSum

///I would rather work on f2

////yes semi colons are needed to let the computer know the statment has ended. otherwise it won't know that and would add it to the statement below it as a continuation
