

//day 3
function setup() {
  createCanvas(displayWidth,displayWidth);
  background (100,200,255)
  stroke(0,0,0)
  frameRate(1) 
}
function draw (){
  translate((windowPane+shift/2),(windowPane+shift/2));
  var windowPane=0;
  var width= windowWidth-2*windowPane
  var height= windowWidth-2*windowPane
  var shift =20;
  var space =40; 
  var num=20; 
  var sideLen=width/num;
   for(var y=0; y<displayWidth; y=y + sideLen){
   for( var x =0; x<displayWidth; x=x +sideLen){
     fill (random(220,200), random (200,150), random(200,250)); 
     stroke (random(220,200), random (200,150), random(200,250)); 
     quad (x+space+ random (-shift, shift), y + space + random (-shift, shift), x+ sideLen - space+ random (-shift, shift), y + space + random(-shift, shift), x+ sideLen- space+ random(-shift, shift), y + sideLen-space+ random (-shift, shift), x+ space + random (-shift, shift), y + sideLen- space+ random (-shift, shift));
     
   }
   }
loop()
}




