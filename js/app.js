// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemyCount = 3;
var allEnemies = [];

function generateEnemies(){
  let enm;
  for(let i = 0; i < enemyCount; i++){
    enm = new Enemy(Math.floor(Math.random()*5), i+1);
    allEnemies.push(enm);
  }
}
generateEnemies();

// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



function showWinModal(){
  document.querySelector(".modal").style.display = "block";
}
  document.querySelector(".close").addEventListener('click', function() {
    document.querySelector(".modal").style.display = "none";
    player.reset = true;
    
  });

  document.querySelector('.modalBtn').addEventListener('click', restartFn);

  function restartFn(){
    modal.style.display = "none";
  
  }