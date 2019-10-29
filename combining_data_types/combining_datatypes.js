/////1
const crayonBox = {
    crayons: [ "Indigo", "Pink", "Brown", "Green"]
}
console.log(crayonBox.crayons[1]);
/////2
const bottle = {
    cap: {
        material: "metal",
        color: "blue"
}
}
console.log(bottle.cap.material);

/////3
const receipt = [
    {name: 'shiplap', price: 30}
]
console.log(receipt[0].name);

////4
const apartmentBuilding = [
    ["bob", "joe", "billy", "tabatha"]
]

console.log(apartmentBuilding[0][2]);

//////////////////////////////////////////////
//Combine objects, arrays, and functions more
/////////than one level deep//////////////////

/////1
const knit = () => {
    return {
    item: "scarf",
    size: "6ft"
    }
}
console.log(knit().item);

///////2
const crayonSelector = () => {
    return {
        crayons: ["Indigo", "Pink", "Brown", "Green"]
    }
}
console.log(crayonSelector().crayons[1]);

////////3
const powerButton = () => {
    return options();
}
    const options = () => {
        console.log("select an anime");
}
powerButton();

//////////////////////////////////////
///////Model a vending maching////////
/////////////////////////////////////

const vendingMachine = {
    snacks: [
        {
            name: "twix left",
            price: 2
        },
        {
            name: "twix right",
            price: 2
        },
        {
            name: "twix original",
            price: 2.25
        },
    ],
//here Dan, Richard, Ashley and I figured to put the function in the object since the instructions are to call it later with a dot - signifying an object
    vend: (num) => {
        return vendingMachine.snacks[num];
    }
}

console.log(vendingMachine.vend(1));


/////////////////////////////////////
/////////////Callbacks///////////////
////////////////////////////////////

/////1
const add = (num1, num2) => {
    return num1 + num2
};
///////2
const subtract = (num1, num2) => {
    return num1 - num2;
};
/////////3
const multiply = (num1, num2) => {
    return num1 * num2
};
///////4
const divide = (num1, num2) => {
    return num1/num2
};
/////5,6,7
const calculate = (num1, num2, operates) => {
    //instead of if else statements I'm returning operates since in my log operates is a parameter-which i am calling a function created prior. i.e subtract will fill in the operates in the return and subtract num1, num2. those numbers are entered in the log within my parameters of calculate
    return operates(num1, num2);
};
console.log(calculate(5, 3, subtract));
console.log(calculate(2, 6, add));
console.log(calculate(5, 2, multiply));
console.log(calculate(6, 3, divide));

///////cleaned up code from homework
const bar = () => {
    console.log('bar here');
}

const foo = () => {
    console.log('foo here');
}
bar();
foo();

///////Error Code. What is meant by the error(s) this produces?

////I fixed the code so it worked. The first problem is that you can not call a function before it is defined. the second was that the function was missing the equal sign after foo
const foo = ()=>{
    console.log('hi');
}
foo();
