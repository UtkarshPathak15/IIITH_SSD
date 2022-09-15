const inputHandler = function(e) {
    let suname =  e.target.value;
    error = document.getElementById('err');
    let uc=0,n=0;
    for (let i = 0; i < suname.length; i++) {
        if(suname[i].toUpperCase() === suname[i]){
            uc=1;
        }
        if(!isNaN(suname[i])){
            n=1;
        }
    }
    if(uc ===1 && n===1){
       error.innerHTML=""; 
    }else{
        error.innerHTML="Invalid Entry!"; 
    }
}

window.onload=function(){
    let sUname  = document.getElementById('suname');
    if(sUname){
        sUname.addEventListener(
            'input',
            inputHandler,
          );
    }
}

function check()
{
    let spwd = document.getElementById("spwd").value;
    let cpwd = document.getElementById("cpwd").value;	
	if(spwd!=cpwd)
		alert("Password mismatch");
	
	
}

function onSubmit(){
    let name = document.getElementById("Name").value;
    let mail = document.getElementById("Mail").value;
    if(!name || !mail){
        return ;
    }
    let display = {
        "Manager Name"  : name,
        "Email" :  mail    
    }
    alert(JSON.stringify(display));
}