class Entity{
    constructor(){
        this.x = 2;
        this.y = 5;
        this.sprite = "images/";

    }
  
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83);

    }

    update(dt){
        this.outOfBoundsX = this.x > 5;
        this.outOfBoundsY = this.y < 1;
    }

    isCollision(entity){
        if(this.y === entity.y){
            if(this.x >= entity.x-0.4 &&  this.x <= entity.x+0.4){
                return true;
            }
            return false;
        }
    }

}

class Player extends Entity{
    constructor(){
        super();
        this.sprite +="char-pink-girl.png";
        this.isWin = false;
        this.isMoving = false;
    }

    handleInput(key){
        switch(key){
            case "left":
                this.x = this.x > 0? this.x -1 : this.x;
                break;
            case "right":
                this.x = this.x < 4 ? this.x + 1 : this.x;
                break;
            case "up":
                this.y = this.y > 0 ? this.y - 1 : this. y;
                break;
            case "down":
                this.y = this.y < 5 ? this.y+1 : this.y;
                break;
            default:
            
        }
    }

    update(dt){
        super.update(dt);
        if(this.outOfBoundsY && !this.isWin){
            alert("You win!!!!");
        }
    }

    
}

class Enemy extends Entity{
    constructor(x, y){
        super();
        this.sprite +="enemy-bug.png";
        this.x = x;
        this.y = y;
        this.speed = Math.random();
    }
    update(dt){
        super.update(dt);
        if(this.outOfBoundsX){
            this.x = -1;
        }else{
            this.x += dt*this.speed+0.01;
        }
    }
}