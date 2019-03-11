
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
    var score = 0;
    var mineralVal = Math.floor(Math.random() * 12) + 1;
    var imgArr = ["assets/images/Aut.jpg", "assets/images/Uran.jpg",
    "assets/images/Torb.jpg", "assets/images/urano.jpg"];
    var gameComplete = false;
    initialize();

    $(".randomNumber").html(randomNumber);

    function initialize(){
    for(var i = 0; i < 4; i++){
        var mineralImg = $("<img>");
        mineralImg.addClass("mineral-image");
        mineralImg.attr("src", imgArr[i]);
        var mineralVal = Math.floor(Math.random() * 12) + 1;
        mineralImg.attr("mineral-value", mineralVal);
        $(".minerals").append(mineralImg);
    }};

    function reset(){
        $(".minerals").empty();
        initialize();
    }

    
    $(".mineral-image").click(function(){
    var eachMinVal = ($(this).attr("mineral-value"));
    eachMinVal = parseInt(eachMinVal)
    score += eachMinVal;
    console.log(eachMinVal);
    $(".score").html(score);
    console.log(randomNumber);


    if(score === randomNumber){
            wins++;
            alert("Nice job!");
            gameComplete = true;
            $(".wins").html("Wins : " + wins);
        }

    else if(score >= randomNumber){
            losses++;
            alert("Oops! You went over! Try again!");
            $(".losses").html("Losses : " + losses);
            gameComplete = true;
        }

    if(gameComplete){
            randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
            score = 0;
            $(".score").html(0);
            $(".randomNumber").html(randomNumber);
            gameComplete = false;
            reset();
        }


    })

    

    });

