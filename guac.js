class patty {
    constructor(pattyX, pattyY, speed, sprite) {
        this.x = pattyX;
        this.y = pattyY;
        this.speed = speed;
        this.sprite = sprite;
    }
    pattyDrop() {
        if(this.y < height - 40){
            image(this.sprite, this.x, this.y, 40, 40);
            this.y += this.speed;
        }
    }
} 