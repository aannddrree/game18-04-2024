document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById("game-container");
    const player = document.getElementById("player");
    let playerX = 0;
    let playerY = 430;
    const step = 10;

    function movePlayer(direction) {
        switch(direction) {
           /* case "ArrowUp":
                playerY -= step;
                break;
            case "ArrowDown":
                playerY += step;
                break;*/
            case "ArrowLeft":
                playerX -= step;
                break;
            case "ArrowRight":
                playerX += step;
                break;
        }
        // Limitar a posição do jogador dentro do contêiner do jogo
        playerX = Math.max(0, Math.min(gameContainer.offsetWidth - player.offsetWidth, playerX));
        playerY = Math.max(0, Math.min(gameContainer.offsetHeight - player.offsetHeight, playerY));
        
        player.style.top = playerY + "px";
        player.style.left = playerX + "px";
    }

    document.addEventListener("keydown", function(event) {
        movePlayer(event.key);
    });
});
