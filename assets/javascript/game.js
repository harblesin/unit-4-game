//A bit of a messy document, some comments may be misplaced as they were placed and written
//before running into a final problem, of which I believe I have found the solution for
//A few changes made last minute to fix the problem made the comments perhaps a little
//iffy. But anyways 

//this makes sure the full page is loaded before it runs so that
//everything the logic is applied to is there and accessible
$(document).ready(function () {

    //declaring all the variable going to be used globally for the site
    //as well as running the initialize function to set up the images and 
    //their values
    var clickEvent
    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
    var score = 0;
    var mineralVal = Math.floor(Math.random() * 12) + 1;
    var imgArr = ["assets/images/Aut.jpg", "assets/images/Uran.jpg",
        "assets/images/Torb.jpg", "assets/images/urano.jpg"
    ];
    var gameComplete = false;
    imagesSent = false;
    initialize();

    //quickly putting the randomized number from 19-120
    //into the appropriate element
    $(".randomNumber").html(randomNumber);
    //$(".mineral-image").click(assign);

    function assign() {


        //defining the logic of when you click on one of the pictures of
        //minerals, grabbing the value of the associated image and 
        //adding it to the score variable, and pushing the value into
        //the div to display the score
        var eachMinVal = ($(this).attr("mineral-value"));
        eachMinVal = parseInt(eachMinVal)
        score += eachMinVal;
        console.log(eachMinVal);
        $(".score").html(score);
        console.log(randomNumber);

        //tests if the score has reached exactly the randomNumber variable,
        //and if so alerts the player and displays the updated amount of wins
        //and sets the boolean to mark the end of the game
        if (score === randomNumber) {
            wins++;
            alert("Nice job!");
            gameComplete = true;
            $(".wins").html("Wins : " + wins);
            score = 0;
        }

        //tests that otherwise if score goes over the value of the randomNumber
        //it alerts the player they have lost, updates the appropriate element
        //with the number of losses and sets the boolean to mark the game as over
        else if (score >= randomNumber) {
            losses++;
            alert("Oops! You went over! Try again!");
            $(".losses").html("Losses : " + losses);
            gameComplete = true;
            score = 0;
        }

        //defining a function that will be ran at the end after a loss
        //or a win, reinitializing the pictures and values of the 
        //mineral images
        if (gameComplete) {
            randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
            score = 0;
            $(".score").html(0);
            $(".randomNumber").html(randomNumber);
            gameComplete = false;
            imagesSent = false;
            $(".minerals").empty();
            initialize();
        }


    }

    //defining the function that set up the value system and
    //elements for the pictures of minerals used to play the game
    function initialize() {
        for (var i = 0; i < 4; i++) {
            var mineralImg = $("<img>");
            mineralImg.addClass("mineral-image");
            mineralImg.attr("src", imgArr[i]);
            var mineralVal = Math.floor(Math.random() * 12) + 1;
            mineralImg.attr("mineral-value", mineralVal);
            $(".minerals").append(mineralImg);
            imagesSent = true;


        }

        //checks to see if img divs have been initialized before it allows
        //a click listener to apply a value the element
        if (imagesSent) {
            $(".mineral-image").click(assign);
        }
    };

});