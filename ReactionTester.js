var startTime = new Date().getTime();
function getRandomColor()
{
    var letters = "0123456789ABCDEF".split("");
    var color = '#';
    for(var i=0; i<6; i++)
    {
        color+= letters[Math.floor(Math.random()*16)];
    }
        return color;
}
function shapeAppear()
{
    var top= Math.random()*400;
    var left= Math.random()*400;
    var width= (Math.random()*300)+100;
    document.getElementById("shape").style.borderRadius="50%";
    document.getElementById("shape").style.background= getRandomColor();
    document.getElementById("shape").style.height=width +"px";
    document.getElementById("shape").style.width=width +"px";
    document.getElementById("shape").style.top=top +"px";
    document.getElementById("shape").style.left= top +"px";
    document.getElementById("shape").style.display="block";
    startTime=new Date().getTime();
}
function appearAfterDelay()
{
    setTimeout(shapeAppear,Math.random()*2000);
}
appearAfterDelay();

document.getElementById("shape").onclick=function()
{
    document.getElementById("shape").style.display="none";
    var endTime = new Date().getTime();
    var timeTaken = (endTime-startTime) / 1000;
    document.getElementById("timetaken").innerHTML= timeTaken+" s";
    appearAfterDelay();    
}