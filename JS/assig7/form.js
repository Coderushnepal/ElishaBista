
function form(){
    var x=document.getElementById("form");
    var createform=document.createElement("form");//Creating the new element form
    createform.setAttribute("action","");
    createform.setAttribute("name","myForm");
    createform.setAttribute("method","");
    createform.setAttribute("onsubmit","validateForm()");
    x.appendChild(createform);

    var heading=document.createElement('h2');//heading of form
    heading.innerHTML="Register with us";
    createform.appendChild(heading);

    // var linebreak=document.createElement('br');
    // createform.appendChild(linebreak);

   //For UserName
    var namelabel=document.createElement('label');//Create label for name label
      namelabel.innerHTML="Username";
      createform.appendChild(namelabel);

      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      var inputelement=document.createElement('input');
      inputelement.setAttribute("type","text");
      inputelement.setAttribute("id","fname");
      inputelement.setAttribute("name","name");
      inputelement.setAttribute("placeholder","Enter Username");
      
      
      createform.appendChild(inputelement);

      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);
        
      
      var error_message=document.createElement("p");
      error_message.innerHTML="Name is required and length>3";
      error_message.style.display="none";
      error_message.id="userError";
      error_message.style.color="red";
     createform.appendChild(error_message);

     //--------------------------------------------------------------- 
     //For Email
      
     var linebreak=document.createElement('br');
     createform.appendChild(linebreak);

      var emaillabel=document.createElement('label');
      emaillabel.innerHTML="Email";
      createform.appendChild(emaillabel);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      var emailelement=document.createElement('input');
      emailelement.setAttribute("type","email");
      emailelement.setAttribute("name","email");
      emailelement.setAttribute("id","email");
   
      emailelement.setAttribute("placeholder","Enter email");
      createform.appendChild(emailelement);


      var error_message=document.createElement("p");
      error_message.innerHTML="valid email is required";
      error_message.style.display="none";
      error_message.style.color="red";
      error_message.id="emailError";
     createform.appendChild(error_message);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);
//---------------------------------------------------------------------------------
    //For password 
      var passwordlabel=document.createElement('label');
     passwordlabel.innerHTML="Password";
      createform.appendChild(passwordlabel);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var passwordelement=document.createElement('input');
     passwordelement.setAttribute("type","password");
     passwordelement.setAttribute("id","password");
      passwordelement.setAttribute("name","password");
      passwordelement.setAttribute("placeholder","Enter Password");
      createform.appendChild(passwordelement);

      var error_message=document.createElement("p");
      error_message.id = "passwordError"
      error_message.innerHTML="length>6 and is required";
      error_message.style.display="none";
      error_message.style.color="red";
     createform.appendChild(error_message);

//-----------------------------------------------------------------------------

     //For Confirm Password
     var linebreak=document.createElement('br');
     createform.appendChild(linebreak);
     var linebreak=document.createElement('br');
     createform.appendChild(linebreak);


      var confirmpasswordlabel=document.createElement('label');
     confirmpasswordlabel.innerHTML="Confirm Password";
      createform.appendChild(confirmpasswordlabel);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var passwordelement=document.createElement('input');
     passwordelement.setAttribute("type","password");
      passwordelement.setAttribute("name","pwd");
      passwordelement.setAttribute("id","pwdConfirm");
      passwordelement.setAttribute("placeholder","Enter Password again");
      createform.appendChild(passwordelement);


      var error_message=document.createElement("p");
      error_message.innerHTML="Should be equal";
      error_message.style.display="none";
      error_message.id="errorMess";
      error_message.style.color="red";
     createform.appendChild(error_message);



      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      let btn = document.createElement("button");
      btn.id = "submitBtn";
      btn.type= "submit";
      btn.style.width= "100%";
      btn.style.color="#fff";
      btn.style.padding="10px 0px";
      btn.style.borderRadius="5px";
      btn.style.border= "rgb(7, 138, 253)";
      btn.style.backgroundColor= "rgb(7, 138, 253)";
      btn.innerText = "Submit";
    //  btn.style.background="blue";
      createform.append(btn);
      // var submit=document.createElement("input");
      // submit.setAttribute("type","submit");
      // submit.setAttribute("name","submit");
      // submit.setAttribute("value","submit");
      // submit.setAttribute("onclick", "validateForm()");
      // var onsubmit=addEventListener("click",function(){
      //     return validateForm();
      // })
      // createform.appendChild(submit);
    }
    form();



    main.addEventListener("click", function(e){
      if(e.target.id=="submitBtn")
    validateForm();
      event.preventDefault();
    })