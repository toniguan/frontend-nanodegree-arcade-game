


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let gamelevel = 0;
var allEnemies = [];
//create enemies based on game level
function generateEnemies(){
  allEnemies = [];
  let enm;
  for(let i = 0; i < gamelevel/3+3; i++){
    enm = new Enemy(Math.floor(Math.random()*5), i%3+1, gamelevel);
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

document.addEventListener('click', function(e){
  let cname = e.target.className;
  if(cname != 'close' && cname !='modalBtn') return;
  if(cname == 'modalBtn') {
    gamelevel++;
  }
    
  document.querySelector(".modal").style.display = "none";
  player.reset = true;
  generateEnemies();
  //console.log(`${allEnemies.length}   ${gamelevel}`);

  
  
});

