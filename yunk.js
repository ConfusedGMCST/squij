let bkg;
let sky;
let krabPat;
let squid;
let squidX;
let playing = false;

function setup() {
    bkg = loadImage('sandBase.png');
    sky = loadImage('spongeSky.png');
    krabPat = loadImage('krabPat.png');
    squid = loadImage('squid.png');
    createCanvas(400, 400);
    squidX = width/2 - 35;
}
  
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
    } else {
        image(squid, squidX, height - 150, 80, 120);
        if (keyIsPressed) {
            if (key == 'a') {
                squidX -= 5;
            } else if (key == 'd') {
                squidX += 5;
            }
        }
    }
}