function show(){
    var pwd=document.getElementById("pwd");
    var icon=document.getElementById("icon")
//    var icon=document.querySelector(".fa");
  
      if(pwd.type=="password"){
          pwd.type="text";
          icon.className="fa fa-eye";
              

      }
      else{
        pwd.type="password";
        icon.className="fa fa-eye-slash";
      }
    
    };

//   const icon=document.querySelector(".fa");
//     console.log(icon);