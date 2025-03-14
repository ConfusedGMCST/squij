class patty {
    constructor(pattyX, pattyY, speed, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }
    pattyDrop() {
        if(this.y < height - 80){
            image(this.sprite, 0, 0, this.x, this.y);
            this.y += speed;
        }
    }
} 