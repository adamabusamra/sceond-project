function toggleSidebar(ref){
    document.getElementById("sidebar").classList.toggle('active');
  }

  function validation(){
    var name=document.getElementById("Username").value;
    var email=document.getElementById("email").value;
    var DOB=document.getElementById("DOB").value;
    var phone=document.getElementById("phone").value;
    var pass=document.getElementById("pass").value;
    var Regexname=/^[A-Za-z]{3,20}/
    var Regexemail=/^[A-Za-z]{2,20}@[A-Za-z]{2,10}.[A-Za-z]{2,3}/
    var RegexDOB=/^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g
    var Regexphone=/^([962])([7-9]{1})([0-9]{7})/
    var Regexpass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/

    if(Regexname.test(name)){
        document.getElementById("name_err").innerHTML="";
    
    }else{
        document.getElementById("name_err").innerHTML="Please Enter a valid  name";
        return false;
    }
    if(Regexemail.test(email)){
        document.getElementById("email_err").innerHTML="";
    }
    else{
        document.getElementById("email_err").innerHTML="Please Enter a valid email";
        return false;
    }
    
    if(Regexpass.test(pass)){
        document.getElementById("pass_err").innerHTML="";
    }
    else{
        document.getElementById("pass_err").innerHTML="Please Enter a valid password";
        return false;
    }
    if(Regexphone.test(phone)){
        document.getElementById("phone_err").innerHTML="";
    }
    else{
        document.getElementById("phone_err").innerHTML="Please Enter a valid phone no.";
        return false;
    } if(Regexphone.test(DOB)){
        document.getElementById("DOB").innerHTML="";
    }
    else{
        document.getElementById("DOB_err").innerHTML="Please Enter BOD";
        return false;
    }

}
function store(){
var inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value);

var inputusername= document.getElementById("Username");
localStorage.setItem("Username", inputUsername.value);
var birthday= document.getElementById("DOB");
localStorage.setItem("DOB", inputbirthday.value);
var num= document.getElementById("phone");
localStorage.setItem("phone", inputnum.value);
var passoward= document.getElementById("pass");
localStorage.setItem("pass", inputnum.value);
}