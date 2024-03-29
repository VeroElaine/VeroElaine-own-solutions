console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
        const $section = $("<section>").attr("id", "middle-earth");

  // 2. append the section to the body of the DOM.
        $("body").append($section);
  // 3. use a for loop to iterate over the lands array that does the following:
        for(i=0; i<lands.length; i++){
  //   3a. creates an article tag (there should be one for each land when the loop is done)
            const $article = $("<article>");


  //   3b. gives each land article an `id` tag of the corresponding land name
            $article.attr("id", lands[i]);
  //   3c. includes an h1 with the name of the land inside each land article
            const $h1 = $("<h1>").text(lands[i]);
            $article.append($h1);

  //   3d. appends each land to the middle-earth section

            $section.append($article);
 }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
        const $hobbitsList = $("<ul>");

  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
        for(let i = 0; i<hobbits.length; i++){
        const $li = $("<li>").addClass("hobbit").text(hobbits[i]);
        $hobbitsList.append($li);
        }
  // 3. also, give each hobbit (`li`) a class of "hobbit"

  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
        $("#The-Shire").append($hobbitsList);
};


// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
    const $div = $("<div>").attr("id", "the-ring");
  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
    $(".hobbit").first().append($div);
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
        const $baddiesList = $("<ul>")
        for(let i = 0; i<baddies.length; i++){
            const $li2 = $("<li>").text(baddies[i]);

  // 2. give each of the baddies a class of "baddy"
        $li2.addClass("baddy");
  // 3. remember to append the ul to Mordor
        $baddiesList.append($li2);
    }
    $("#Mordor").append($baddiesList);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
    const $aside = $("<aside>");
    $("#middle-earth").append($aside)

  // 2. display an unordered list of buddies in the aside
    const $buddiesList = $("<ul>");
    for(let i =0; i < buddies.length; i++){
        const $li3 = $("<li>").text(buddies[i]);
  // 3. give each of the buddies a class of "buddy"
        $li3.addClass("buddy")
        $buddiesList.append($li3);
    }
  // 4. don't forget to append them to the aside
        $aside.append($buddiesList);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
      $("#The-Shire").children("ul").appendTo("#Rivendell")
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'

    //I tried to use .find("li", "Strider").text("Aragorn") and a .find("li", [3]), but it kept changing every list item. I found an .eq() method online where I could use a .find() with it and that worked, but I don't full understand why I can not use the word "strider" and change it instead of hardcoding the index in the .eq()
     console.log("Beautiful Stranger");
     $("aside").find("li").eq(3).text("Aragorn")

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
        const $fellowshipDiv = $("<div>").attr("id", "the-fellowship");
  // 2. add an h1 with the text 'The Fellowship' to this new div
        const $h1Num2 = $("<h1>").text("The Fellowship")
        $fellowshipDiv.append($h1Num2)
  // 3. append the fellowship to middle-earth
        $("#middle-earth").append($fellowshipDiv);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

        //$fellowshipDiv.append($hobbitsList);
        //$fellowshipDiv.append($buddiesList);

        $("#Rivendell").children("ul").appendTo($fellowshipDiv);
        $("aside").children("ul").appendTo($fellowshipDiv);
        //$fellowshipDiv.append($("#Rivendell").children().eq(1));
        //$fellowshipDiv.append($("aside").children().eq(0));
        //$("#hobbitsList").appendTo("#the-fellowship")
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' text to 'Gandalf the White'
        $(".buddy").eq(0).text("Gandalf the White").addClass("the-white");
  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!")

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
    $(".buddy").eq(4).css("text-decoration", "line-through")
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
    $(".buddy").eq(2).remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
    $(".hobbit").eq(0).appendTo("#Mordor");
    $(".hobbit").eq(1).appendTo("#Mordor")
  // 2. add a div with an id of 'mount-doom' to Mordor
    const $mordorDiv = $("<div>").attr("id", "mount-doom")
    $("#Mordor").append($mordorDiv)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
        const $gollumDiv = $("<div>").attr("id", "gollum")
        $("#Mordor").append($gollumDiv);
  // 2. Move the ring from Frodo and give it to Gollum
        $("#the-ring").appendTo($gollumDiv)
  // 3. Move Gollum into Mount Doom
        $("#mount-doom").append($gollumDiv);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
    $("#gollum").remove();
  // 2. remove all the baddies from the DOM
    $(".baddy").remove();
  // 3. Move all the hobbits back to the shire
    $(".hobbit").appendTo("#The-Shire");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
