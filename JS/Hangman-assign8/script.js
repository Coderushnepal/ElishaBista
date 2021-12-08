//For title
var title=document.createElement("div");
title.style.textAlign="center";
title.classList="title";
title.style.position="absolute";
title.style.color="#fff";
// title.style.margin="-230px";
document.body.appendChild(title);
//For heading
var heading=document.createElement("h1");
heading.innerHTML="HangMan"
title.appendChild(heading);
//For subtitle
var subtitle=document.createElement("p");
subtitle.innerHTML="Find the hidden word-Enter a letter";
title.appendChild(subtitle);




var words=["January","Sunday","Mango","Rainy","Hello","CSIT","Science","Winter","Corona","Nepal","Elisha","Neha"];
 var splitWords= words[Math.floor(Math.random() * words.length)].toLowerCase();

//wrong  letters display
var wrongDiv=document.createElement("div");
wrongDiv.classList.add("wrongDiv");
wrongDiv.style.position="absolute";
wrongDiv.style.fontWeight= 'bold';
wrongDiv.style.top="500px";
document.body.appendChild(wrongDiv);
var wrongTitle = document.createElement('h2');
wrongTitle.classList.add('wrongTitle');
wrongTitle.innerHTML = 'Wrong Letters';
wrongTitle.style.color = 'white';
wrongTitle.style.fontWeight= 'bold';
wrongTitle.style.position= 'absolute';
wrongTitle.style.top= '480px';
wrongTitle.style.left= '900px';

document.body.appendChild(wrongTitle);


//div for message
var  alert=document.createElement("div");
alert.classList.add("message");
alert.style.backgroundColor="#fff";
alert.style.color="#000";
alert.style.height="100px";
alert.style.width="200px";
alert.style.borderRadius="5px";
alert.style.visibility="hidden";
document.body.appendChild(alert);
//for innerhtml in message
var notification = document.createElement("h3");

notification.innerHTML = "Already guessed";
notification.style.textAlign = "center";
alert.appendChild(notification);

//for winbox
var winbox=document.createElement("div");
winbox.style.backgroundColor="#fff";
winbox.style.height="127px";
winbox.style.visibility="hidden";
winbox.id="box1";
winbox.style.width="200px";
winbox.style.position="absolute";
winbox.style.top="216px";
winbox.classList.add("won");
document.body.appendChild(winbox);
//For the inner text of winbox
var winValue=document.createElement("h3");
winValue.innerHTML="Congrats,You won the game";
winValue.style.color="#000";
winValue.style.color="#000";
winValue.style.textAlign="center";
winbox.appendChild(winValue);

//For button
var button1=document.createElement("button");
button1.innerHTML="Play again";
button1.style.marginLeft="52px";
button1.id="button";
winbox.appendChild(button1);

//For lost box

var lostBox=document.createElement("div");
lostBox.style.backgroundColor="#fff";
lostBox.style.height="105px";
lostBox.style.visibility="hidden";
lostBox.id="box2";
lostBox.style.width="200px";
lostBox.style.position="absolute";
lostBox.style.top="216px";
lostBox.classList.add("loss");
document.body.appendChild(lostBox);

var lostValue=document.createElement("h3");
lostValue.innerHTML="Sorry,You lost";
lostValue.style.color="#000";
lostValue.style.color="#000";
lostValue.style.textAlign="center";
lostBox.appendChild(lostValue);
var button1=document.createElement("button");
button1.innerHTML="Play again";
button1.id="buttons";
button1.style.marginLeft="52px";
// button1.style.border="2px solid blue";
lostBox.appendChild(button1);
//-------------------------------------------------------------
var guessedLetters=[];

 for(var i=0;i<splitWords.length;i++){
    var dash=document.createElement("span");
    dash.style.borderBottom="5px solid #fff";
    dash.style.width="30px";
    dash.classList="dashWord";
    dash.id="dash";
    dash.style.height="25px";
    
    // dash.style.marginTop="100px";
  
    dash.style.display = "inline-block";
    dash.style.marginLeft="15px";
   box.appendChild(dash);
  

}
<<<<<<< HEAD
var wrongDiv=document.getElementsByClassName(wrongDiv);
var wrongLetters=[];
var wrongGuess = document.createElement("span");
wrongGuess.id="wrong-letter";
wrongTitle.appendChild(wrongGuess);
=======

var wrongLetters=[];
>>>>>>> 7e0131def26865fe0dc2637d29b98995ad89c085
var letters = document.querySelectorAll('.dashWord');
document.body.addEventListener("keydown",function(e){
  if (splitWords.includes(e.key)){
    if(guessedLetters.includes(e.key)){
       alert.style.visibility="visible";
      setTimeout(()=>{
         alert.style.visibility="hidden"; 
      },1000);
    }

      for(var j=0;j<splitWords.length;j++){
         if(splitWords[j]===e.key){
            guessedLetters.push(e.key);
            letters[j].innerHTML=e.key; 
            
            
      if (guessedLetters.length === splitWords.length) {
               var winBox = document.getElementById("box1");
           
               winBox.style.visibility = "visible";
         }     
      }
   } 
} 
   else{         
      displayFigureParts();
<<<<<<< HEAD
     
    
      wrongGuess = document.getElementById("wrong-letter");
    if(!wrongLetters.includes(e.key)){
     
       wrongLetters.push(e.key);
     console.log(wrongLetters);
  

=======
      var wrongLetterSpan = document.createElement('span');
      wrongLetterSpan.classList.add('wrongLetterSpan')
    if(!wrongLetters.includes(e.key)){
     
       wrongLetters.push(e.key);
     
>>>>>>> 7e0131def26865fe0dc2637d29b98995ad89c085
   
     
    }
    else{
       alert.style.visibility="visible";
       setTimeout(()=>{
         alert.style.visibility="hidden";
       },1000)
    }
    if (wrongLetters.length === 6) {
    
    var lostBox= document.getElementById("box2");
  
      lostBox.style.visibility = "visible";
    }
<<<<<<< HEAD
    
=======
  
>>>>>>> 7e0131def26865fe0dc2637d29b98995ad89c085
      
       
   }
});
// for win button
 button.addEventListener("click",function(e){
   window.location.reload();

})
//For lost button
buttons.addEventListener("click",function(e){
   window.location.reload();

})

