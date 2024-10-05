let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");
let gameOverText = document.getElementById("game-over");
let isJumping = false;

document.body.onkeydown = function(e) {
    if (e.code === "Space") {
        if (!isJumping) {
            jump();
        }
    }
};

function jump() {
    let jumpHeight = 0;
    isJumping = true;

    let jumpInterval = setInterval(function() {
        if (jumpHeight >= 150) {
            clearInterval(jumpInterval);
            let fallInterval = setInterval(function() {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                }
                jumpHeight -= 5;
                character.style.bottom = jumpHeight + "px";
            }, 20);
        }
        jumpHeight += 5;
        character.style.bottom = jumpHeight + "px";
    }, 20);
}

let checkCollision = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 50 && obstacleLeft > 0 && characterTop <= 50) {
        gameOverText.style.display = "block";
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        clearInterval(checkCollision);
    }
}, 10);
