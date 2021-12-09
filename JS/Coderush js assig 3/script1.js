const btn=document.getElementById('btn');
const frame=document.getElementById('frame');
// console.log(frame);
const height=frame.clientHeight;
const width=frame.clientWidth;
const margin = window.innerHeight - height;
console.log(height, width, margin);
var direction=1;
btn.onclick=function(e){
    var newCircle=document.createElement('div');
    newCircle.classList.add('circle');
    newCircle.style.top=margin+ Math.random()*height+'px';
    newCircle.style.left=margin+ Math.random()*width+'px'; 
  
    newCircle.addEventListener("click",function(e){
      setInterval(function(){
          var currentTop=newCircle.style.top;
          var newValue=parseInt(currentTop)+10*direction;
          newCircle.style.top=newValue+"px";
          var clientHeight=frame.clientHeight;
          if(newValue>=(clientHeight-25)||(newValue)<=0){
              direction *=-1;
          }
        }, 1000/60);
      });
      frame.appendChild(newCircle);

