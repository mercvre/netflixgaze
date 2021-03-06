
'use strict';

var img;
let parent;

function preload() {
  img = loadImage('img/logo-netflix.svg');
  parent = document.getElementById('myContainer');
}

function setup() {
  img.resize(0, parent.offsetHeight);
  // let myCanvas = createCanvas(parent.offsetWidth, img.height);
  let myCanvas = createCanvas(img.width, parent.offsetHeight);
  myCanvas.parent('myContainer');
  image(img, 0, 0);
}

function windowResized() {
  // img.resize(parent.offsetWidth, 0);
  // resizeCanvas(parent.offsetWidth, img.height);
  resizeCanvas(img.width, parent.offsetHeight);
  img.resize(0, parent.offsetHeight);
  image(img, 0, 0);
}

function draw() {
  var x1 = random(width);
  var y1 = random(height);

  var x2 = round(x1 + random(-20, 20));
  var y2 = round(y1 + random(-30, 30));

  var w = 25;
  var h = 50;

  set(x2, y2, get(x1, y1, w, h));
}

// function keyReleased() {
//   if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
//   if (keyCode == DELETE || keyCode == BACKSPACE) {
//     clear();
//     image(img, 0, 0);
//   }
// }
