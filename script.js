const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); //for rotating objects

ctx.canvas.width=800;
ctx.canvas.height=800;

var r1 = 50; //sun
var col1 = 'orange'; // sun color
var l1 = 250; //dist between sun and earth

var r2 = 25; //earth
var col2 = '#0000ff'; // earth
var l2 = 80; //dist beetween earth and moon

var r3 = 13; //moon radius
var col3 = 'white' // moon color

var r4 = 2; // tiny stars
let col4 = '#ffffff';

var t1 = 0; //time constants t1&t2
var t2 = 0;

//for stars
var rs = 1;
var n = 200;

//random stars
var xx=[]; yy=[] ;
for(i=0;i<n;i++){
xx[i]=Math.floor(Math.random()*800);

for(j=0;j<n;j++){
    yy[j]= Math.floor(Math.random()*800);
};
};
var cx, cy, mx, my;

//to run the code 60 fps
window.onload= function(){
setInterval(draw,1000/60)
}

function round(x,y,r,col){
with(ctx){
fillStyle=col
beginPath();
arc(x,y,r,0,2*Math.PI,true);
fill();
};
};




function draw(){
with(ctx){

clearRect(0,0,canvas.width,canvas.height);

//stars
for(k=0;k<n;k++){
    round(xx[k],yy[k],rs,col3)
};
//sun
save();
translate(canvas.width/2,canvas.height/2);
round(0,0,r1,col1)

//earth
cx=l1*Math.cos(t1);
cy=l1*Math.sin(t1);

round(cx,cy,r2,col2);

//moon
translate(cx,cy);
mx=l2*Math.cos(t2);
my=l2*Math.sin(t2);
round(mx,my,r3,col3)
t2+=0.04;
t1+=0.01;
restore();

};
};

