// for signup page validation

function loginvalidate(){  
    var emailid=document.getElementById('inputEmail4');
    var pwd=document.getElementById('inputPassword4');  
    var regexp=/^([A-Za-z0-9.-]+)@([a-zA-Z0-9-]+).([a-z]){2,3}(.[a-z]{2,3})?$/;
    if(emailid.value.trim()=='' || pwd.value.trim()==''){
        alert('Email and Password cannot be empty');
        return false;
    }
    else if(regexp.test(emailid.value)==false){
        alert('Email is not correct');
        return false;
    }
    else{
        return true;
    }
}


function signupvalidate(){
    var signupemail=document.getElementById('signupinputEmail4').value;
    var signuppwd=document.getElementById('signupinputPassword4').value;
    var signupphone=document.getElementById('signupinputPhone').value;

    var emailregexp=/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+).([a-z]){2,3}(.[a-z]{2,3})?$/;
    var phoneregexp=/^([0-9]{3})([-. ]?)([0-9]{3})([-. ]?)([0-9]{4})$/;
    var pwdregexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;

    if(signupemail.trim()==''|| signuppwd.trim()==''){
        alert('Email or password cannot be empty');
        return false;
    }
    else if(emailregexp.test(signupemail)==false){
        alert('Email id is not correct');
        return false;
    }
    else if(pwdregexp.test(signuppwd)==false){
        alert('Password should be in correct format')
        return false;
    }
    else if(phoneregexp.test(signupphone)==false){
        alert('Phone number is not in correct format');
        return false;
    }
    else{
        return true;
    }
}

 

function pwdstrengthchecker() {
    var pwdcolorbar=document.getElementById ('pwdstrengthbar');
    var pwdbox=document.getElementById('signupinputPassword4');
    var pwd=document.getElementById('signupinputPassword4').value;
    var specialchar='/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/';
    var score=0;
    for(var i=0;i<pwd.length;i++){
        if(specialchar.indexOf(pwd.charAt(i))>-1){
            score +=20;
            break;
        }
    }
    if(/([a-z])/.test(pwd)){
        score+=20;
    }
    if(/([A-Z])/.test(pwd)){
        score+=20;
    }
    if(/([\d])/.test(pwd)){
        score+=20;
    }
    if(pwd.length>=8){
        score+=20;
    }

    var strength='Minimum 8 characters';
    var bgcolor='';
    
    if(score>=100){
        strength="Strong";
        bgcolor='green';
    }
    else if(score>=80){
        strength="Medium";
        bgcolor='blue';
    }
    else if(score>=60){
        strength="Weak";
        bgcolor='orange';
    }    
    else{
        strength='Very Weak';
        bgcolor='red';
    }    
    pwdcolorbar.style.width='12em';
    pwdcolorbar.style.height='1.5em';
    pwdcolorbar.innerHTML=strength;
    pwdcolorbar.style.backgroundColor=bgcolor;
    pwdcolorbar.style.color="white";

    if(pwd.length==0){
        pwdcolorbar.innerHTML='Minimum 8 characters';
        pwdcolorbar.style.color='black';
        pwdcolorbar.style.background='transparent';
    }
  }
