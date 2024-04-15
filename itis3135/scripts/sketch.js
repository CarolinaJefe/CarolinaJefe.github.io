const colors = [
    [0, 0, 0],       // Black
    [255, 0, 0],     // Red
    [255, 165, 0],   // Orange
    [255, 255, 0],   // Yellow
    [0, 128, 0],     // Green
    [0, 0, 255],     // Blue
    [75, 0, 130],    // Indigo
    [238, 130, 238], // Violet
];
const colorDisplaySize = 50;

function setup() {
    createCanvas(800, 800);
    background(255, 255, 255);

    noStroke();
    stroke(colors[0]);
    fill(colors[0]);
}

function draw() {
    square(0, height - colorDisplaySize, colorDisplaySize);
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function keyPressed() {
    switch (keyCode) {
        case 8:
            background(255, 255, 255);
            break;
        case 49:
            fill(colors[0]);
            stroke(colors[0]);
            break;
        case 50:
            fill(colors[1]);
            stroke(colors[1]);
            break;
        case 51:
            fill(colors[2]);
            stroke(colors[2]);
            break;
        case 52:
            fill(colors[3]);
            stroke(colors[3]);
            break;
        case 53:
            fill(colors[4]);
            stroke(colors[4]);
            break;
        case 54:
            fill(colors[5]);
            stroke(colors[5]);
            break;
        case 55:
            fill(colors[6]);
            stroke(colors[6]);
            break;
        case 56:
            fill(colors[7]);
            stroke(colors[7]);
            break;
    }
}