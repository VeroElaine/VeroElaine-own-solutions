// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
    const $body = $("body").css("background-image", "url(img/hogwarts.png)").css("background-repeat", "no-repeat").css("background-position", "center").css("background-size", "cover");
    const $div = $("<div>");
    $div.attr("id", "container");
    $body.append($div);

    const $h1 = $("<h1>").text("Hogwarts Year One").css("font-family", "Parry Hotter").css("border-bottom", "1px solid black").css("font-weight", "bold").css("font-size", "40px");
    $div.append($h1);

    const $h2 = $("<h2>").text("Veronica Elaine").css("font-family", "Parry Hotter").css("color", "turquoise").css("font-size", "32px");
    $div.append($h2);

    const $h3= $("<h3>").text("Gryffindor").css("font-family", "Parry Hotter");
    $div.append($h3);

    const $h4 = $("<h4>").text("Kira");
    $h4.attr("class", "dog");
    const $h4Num2 = $("<h4>").text("Holly Wand with Unicorn Hair Core");
    $div.append($h4,$h4Num2);
    //break your wand! remove element that contains wand.
    $h4Num2.remove();
    //get a new wand!
    const $newWand = $("<h4>").text("Birch Wand with Phoenix Feather Core").css("color", "hotpink");
    $div.append($newWand);

    //creating unordered list inside div
    const $ul = $("<ul>").attr("storage", "trunk").css("list-style-type", "none").css("color", "turquoise");
    $div.append($ul);

    //oops you broke your trunk. get a new storage container for your stuff, replace the unordered list's prperty of trunk with a new peoperty of chest.
    $ul.removeAttr("storage").attr("storage", "chest");


    //creating links in the unordred list
    const $li = $("<li>").text("Butter beer");
    $ul.append($li);
    //class was hard! drink all your butter beer. remove the element that contains butter beer
    $li.remove();
    //buy mmore butter beer!
    $li.text("Butter beer");
    $ul.append($li);

    const $li2 = $("<li>").attr("class", "secret").text("invisibility cloak").css("font-family", "Parry Hotter")
    $ul.append($li2);
    const $li3 = $("<li>").attr("class", "secret").text("magic map").css("font-family", "Parry Hotter");
    $ul.append($li3);
    const $li4 = $("<li>").attr("class", "secret").text("time turner").css("font-family", "Parry Hotter");
    $ul.append($li4);
    const $li5 = $("<li>").attr("class", "dog").text("leash");
    $ul.append($li5);
    const $li6 = $("<li>").text("Brtie Bott's Every Flavor [Jelly] Beans");
    $ul.append($li6);
    $(".secret").hide().delay(2000).show(3000);

    //add a cabbage class and change colors in main css, remove cabbage class
    $li5.addClass("cabbage");
    $li5.removeClass("cabbage");

    const $h5 = $("<h5>").text("Spring 2017").css("color", "hotpink").css("font-size", "22px").css("font-family", "cursive");
    $body.append($h5);
    const $table = $("<table>").css("color", "turquoise");
    $body.append($table);
    const $thead = $("<thead>");
    $table.append($thead);
    const $tr = $("<tr>");
    $thead.append($tr);
    const $th = $("<th>").text("Day").css("font-family", "Parry Hotter").css("background", "white");;
    $tr.append($th);
    const $th2 = $("<th>").text("Classes").css("font-family", "Parry Hotter").css("background", "white");;
    $tr.append($th2);
    //change spring 2017 to fall 2018
    $h5.text("Fall 2018")

    //Creating Monday classes
    const $tr2 = $("<tr>").css("background", "white");;
    $thead.append($tr2);
    const $td = $("<td>").text("Monday").css("background", "white")
    $tr2.append($td);
    const $td2 = $("<td>").text("Herbology, Defense Against the Dark Arts, Quidditch Practice")
    $tr2.append($td2);

    //Creating Tuesday classes
    const $tr3 = $("<tr>").css("background", "white");
    $thead.append($tr3);
    const $td3 = $("<td>").text("Tuesday")
    $tr3.append($td3);
    const $td4 = $("<td>").text("Divination, History of Magic, Transfiguration, Charms")
    $tr3.append($td4);

    //Creating Wednesday Classes
    const $tr4 = $("<tr>").css("background", "white");;
    $thead.append($tr4);
    const $td5 = $("<td>").text("Wednesday")
    $tr4.append($td5);
    const $td6 = $("<td>").text("Herbology, Defense Against the Dark Arts, Quidditch Practice")
    $tr4.append($td6);

    //Creating Thursday Classes
    const $tr5 = $("<tr>").css("background", "white");;
    $thead.append($tr5);
    const $td7 = $("<td>").text("Thursday")
    $tr5.append($td7);
    const $td8 = $("<td>").text("Astronmy, Flying, Care of Magical Creatures")
    $tr5.append($td8);

    //Creating Friday Classes
    const $tr6 = $("<tr>").css("background", "white");;
    $thead.append($tr6);
    const $td9 = $("<td>").text("Wednesday")
    $tr6.append($td9);
    const $td10 = $("<td>").text("Divination, History of Magic, Transfiguration, Charms")
    $tr6.append($td10);

})
