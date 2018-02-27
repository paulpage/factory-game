var tileSize = 64;
var gridSize = 8;
var starterImage;

function preload() {
    starterImage = _newImage("res/starter.png");
}

function setup() {
    createCanvas(tileSize * gridSize, tileSize * gridSize);
}

function draw() {
    background(80);
    fill(0);
    for (var i = 0; i < gridSize; i++) {
        line(0, i * tileSize, width, i * tileSize);
        line(i * tileSize, 0, i * tileSize, height);
    }

    fill(200);
    rect(_snap(mouseX), _snap(mouseY), tileSize, tileSize);
    drawSprites();
}

function mousePressed() {
    _newSprite(mouseX, mouseY, starterImage);
}

/**
 * Returns a new p5 Image scaled to tileSize
 */
function _newImage(path) {
    return loadImage(path, function(img) {
        img.resize(tileSize, tileSize)
    });
}

/**
 * Creates a new p5.play sprite snapped to the grid using the
 * given mouse coordinates and image
 */
function _newSprite(x, y, img) {
    return createSprite(
        _snap(x) + tileSize / 2, 
        _snap(y) + tileSize / 2,
        tileSize, 
        tileSize
    ).addImage(img);
}

/**
 * Return a pixel coordinate snapped to the upper left corner of the grid
 */
function _snap(coord) {
    return _toGrid(coord) * tileSize;
}

/**
 * Return the closest grid index given a pixel coordinate.
 */
function _toGrid(coord) {
    return floor(coord / tileSize);
}

