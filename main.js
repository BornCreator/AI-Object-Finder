var p='';
var r='';
var q='';
var a='';
var g='';
var i=[];
o=window.speechSynthesis;
function setup(){
    b=createCanvas(480,400);
    b.center();
    c=createCapture(VIDEO);
    c.size(480,400);
    c.hide();
}
function draw(){
    image(c,0,0,480,400);
    if(a!=''){
        d.detect(c,h);
        for(var f=0;f<i.length;f++){
            g=floor(i[f].confidence*100)+'%';
            j=i[f].label;
            k=i[f].x;
            l=i[f].y;
            m=i[f].width;
            n=i[f].height;
            if(e==j){
                p=new SpeechSynthesisUtterance('Object Mentioned was Found');
                console.log('Object Mentioned was Found!');
                document.getElementById('found?').innerHTML='Object Found';
            }else{
                p=new SpeechSynthesisUtterance('Object Mentioned Was not found');
                console.log("Mentioned Object Wasn't Found");
                document.getElementById('found?').innerHTML='Object not Found';
            }
                o.speak(p);
                document.getElementById('status').innerHTML='Status: Objects Detected';
            c.stop();
            d.detect(h);
        }
    }
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
function h(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        i=results;
    }
}