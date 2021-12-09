var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
var ball=document.createElement("div");
var box=document.getElementById("box1");
var i=0;
ball.id=i;
ball.style.width="20px";
ball.style.height="20px";
ball.style.backgroundColor="red";
ball.style.position="absolute";
ball.style.borderRadius="50%";
ball.style.top=Math.random()*(box.clientHeight-25)+"px";
ball.style.left=Math.random()*(box.clientWidth-25)+"px";

 var direction=1; 

     setInterval(function(){
          
        var currentTop=ball.style.top;
        var newValue=parseInt(currentTop)+10*direction; 
         ball.style.top=newValue+"px";
         if(newValue>=(box.clientHeight-30)||(newValue)<=0){
             direction*=-1;
         }
  
  
 },1000/60);
box.appendChild(ball);
i++;

});