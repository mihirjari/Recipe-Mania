window.onload = function(){

 document.getElementById("firstname").focus();
 
 var form = document.getElementById("subscribe");

 var btn = document.getElementById("submitbtn");

 btn.addEventListener('click', function(){
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contactnumber").value;
    
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phonePattern = /^\d{10}$/;
    var isValid = true;
   
    if(firstname=="" || lastname=="" || email=="" || contact==""){      //Using if...else if Statement

        isValid = false;
        document.getElementById("errormsg").style.color = "#d9534f";
        document.getElementById("errormsg").style.backgroundColor = "#ffb3b391";
        document.getElementById("errormsg").innerHTML = "All The Fields are Required.";

        setTimeout(function(){       //Using setTimeout Function
            document.getElementById("errormsg").style.backgroundColor = "";
            document.getElementById("errormsg").innerHTML = "";
        },3000)

    }else if(!emailPattern.test(email)){        //Using Logical Not Operator

        isValid = false;
        document.getElementById("errormsg").style.color = "#d9534f";
        document.getElementById("errormsg").style.backgroundColor = "#ffb3b391";
        document.getElementById("errormsg").innerHTML = "Invalid Email Entered.";

        setTimeout(function(){       //Using setTimeout Function
            document.getElementById("errormsg").style.backgroundColor = "";
            document.getElementById("errormsg").innerHTML = "";
        },3000)

    }else if(!phonePattern.test(contact)){
        isValid = false;
        document.getElementById("errormsg").style.color = "#d9534f";
        document.getElementById("errormsg").style.backgroundColor = "#ffb3b391";
        document.getElementById("errormsg").innerHTML = "Invalid Contact Number Entered.";

        setTimeout(function(){       //Using setTimeout Function
            document.getElementById("errormsg").style.backgroundColor = "";
            document.getElementById("errormsg").innerHTML = "";
        },3000)

    }

    if(isValid){        //Using if Statement
            
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("contactnumber").value = "";
            document.getElementById("errormsg").style.color = "#00ff00";
            document.getElementById("errormsg").style.backgroundColor = "#8ccf8caf";
            document.getElementById("errormsg").innerHTML = "Thank you For Subscribing.";

            setTimeout(function(){      //Using setTimeout Function
                document.getElementById("errormsg").style.backgroundColor = "";
                document.getElementById("errormsg").style.color = "";
                document.getElementById("errormsg").innerHTML = "";
            },3000);
            
    }
   
    
 });

 
}