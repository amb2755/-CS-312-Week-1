function rollTheDice() {
    // Generate random numbers for both dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
    var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png

    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
    var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

    // Set the src attribute for the dice images
    var image1 = document.querySelectorAll("img.img1")[0];
    var image2 = document.querySelectorAll("img.img2")[0];
    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);

    // Determine the winner and update the result
    var resultText;
    if (randomNumber1 > randomNumber2) {
        resultText = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        resultText = "Player 2 Wins!";
    } else {
        resultText = "It's a Draw!";
    }
    document.getElementById("result").textContent = resultText;
}

function editName() {
    // Add functionality to edit player names if needed
}
