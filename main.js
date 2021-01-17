var a='';
function setup(){
    b=createCanvas(480,400);
    b.center();
    c=createCapture(VIDEO);
    c.size(480,400);
    c.hide();
}
function draw(){
    image(c,0,0,480,400);
}
function start(){
    d=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById('status').innerHTML='Status: Detecting Objects';
    e=document.getElementById('objectName').value;
}
function modelloaded(){
    console.log('Model has Been Loaded');
    a=true;
}