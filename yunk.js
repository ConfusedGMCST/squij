let bkg;
let sky;
let krabPat;
let pattyArray = [];
let squid;
let squidX;
let squidSpeed = 5;
let playing = false;
let lose = false;
let min = 0.75;
let max = 3.5;
let score = 0;
//initialising the things I need in the variables and in setup
function setup() {
    bkg = loadImage('sandBase.png');
    sky = loadImage('spongeSky.png');
    krabPat = loadImage('krabbyPat.png');
    squid = loadImage('squid.png');
    createCanvas(400, 400);
    squidX = width/2 - 35;
}
//spawns patty (in the name) with a bunch of random properties to determine position & speed
function pattySpawn() {
    for (let i = 0; i < random(3,7); i++) {
        let skort = new patty(random(0, width - 40), -40, random(min + score * 0.01, max + score * 0.01), krabPat);
        pattyArray.push(skort);
    }
}
//determines if squidward is touching patties
function pattyCollision() {
    for (let i = pattyArray.length - 1; i >= 0; i--) {
        if (pattyArray[i].x <= squidX + 50 && 
            pattyArray[i].x >= squidX - 50 && 
            pattyArray[i].y > height - 170 && 
            pattyArray[i].y < height - 80) {
            pattyArray.splice(i, 1);
            score++;
        }
    }
}
//displays score
function showScore() {
    text(score, 20, 20)
}
//loops through patty array and makes each patty drop and checks if player misses a patty
function pattyFall() {
    for (let i = pattyArray.length - 1; i >= 0; i--) {
        if (pattyArray[i]) {
            pattyArray[i].pattyDrop();
            if (pattyArray[i].y > height - 80) {
                pattyArray.splice(i, 1);
                lose = true
            } else {
                pattyCollision();
            }
        }
    }
}
//main game loop
function draw() {
    background(220);
    image(sky, 0, 0);
    image(bkg, 0, height - 100);
    fill(255)
    if (!playing) {
        textAlign(CENTER);
        text("press any key to play",width/2,height/2);
        if (keyIsPressed) {
            playing = true;
        }
    } else if(playing && !lose) {
        squidX = mouseX - 40;
        image(squid, squidX, height - 150, 80, 120);
        if (pattyArray.length == 0) {
            pattySpawn();
        } else {
            pattyFall();
        }
        showScore();
    } else {
        image(squid, squidX, height - 150, 80, 120);
        text("You lose!", width/2, height/2);
        showScore();
    }
}