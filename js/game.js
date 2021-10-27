var gamePattern = []

var buttonColours = ["red", "blue", "green", "yellow"]

function getNextColour() {
    var randomChosenColour = buttonColours[nextSequence()]
    return randomChosenColour;
}

function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3)
    return randomNumber
}

gamePattern.push(getNextColour())