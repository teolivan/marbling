

let drops = [];


function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  let drop = new Drop(mouseX, mouseY, 50);

  //process all of the drops in the array before the other drop gets added into the array
  for(let other of drops) {
    drop.marble(other);
  }

  drops.push(drop);
}

function draw() {
  background(240);
  for(let drop of drops) {
    drop.show();
  }
}
