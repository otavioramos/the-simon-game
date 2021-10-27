var gamePattern = []

var userClickedPattern = []

var buttonColours = ["red", "blue", "green", "yellow"]

var level = 0

$(".btn").click(handleClickButtons)

$(document).keydown(() => {
    $("#level-title").text(`Level ${level}`)
    getNextColour()
})

function handleClickButtons() {
    var userChosenColour = this.getAttribute("id")
    userClickedPattern.push(userChosenColour)
    animatePress(userChosenColour)
    playSound(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
}

function getNextColour() {
    userClickedPattern = []
    var randomChosenColour = buttonColours[nextSequence()]
    gamePattern.push(randomChosenColour)
    animateChosenButton(randomChosenColour)
    playSound(randomChosenColour)
}

function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3)
    level++
    return randomNumber
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success")
    } else {
        var bodyElement = $("body")
        bodyElement.addClass("game-over")
        var wrong = new Audio("sounds/wrong.mp3")
        wrong.play()

        setTimeout( () => {
            bodyElement.removeClass("game-over")
        }, 200)

        $("#level-title").text("Game Over, Press Any Key to Restart")
    }

    if (userClickedPattern.length === gamePattern.length){
        setTimeout( () => {
          getNextColour();
        }, 1000);
    }
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed")

    setTimeout(() => { 
        $(`#${currentColour}`).removeClass("pressed")
    }, 100);
}

function animateChosenButton(chosenColour) {
    $(`#${chosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(chosenColour) {
    switch (chosenColour) {
        case "red":
            var red = new Audio("sounds/red.mp3")
            red.play()
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3")
            blue.play()
            break;
        case "green":
            var green = new Audio("sounds/green.mp3")
            green.play()
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3")
            yellow.play()
            break;
        default:
            break;
    }  
}