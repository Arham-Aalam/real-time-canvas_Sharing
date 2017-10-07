var socket;

function setup(){
  createCanvas(600, 500);
  background(0);
  socket = io.connect('http://127.0.0.1:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 10, 10);
}

function mouseDragged(){
  console.log("sending :" + mouseX + "," + mouseY);

  var data = {
    x:mouseX,
    y:mouseY
  }
  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 10, 10);
}

function draw(){

}
