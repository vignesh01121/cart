var first=document.querySelector("#first")
var last=document.querySelector("#last")
var email=document.querySelector("#email")
var number=document.querySelector("#number")
var button=document.querySelector("button")
var pass=document.querySelector("#pass")
var cpass=document.querySelector("#cpass")
var efirst=document.querySelector("#efirst")
var elast=document.querySelector("#elast")
var eemail=document.querySelector("#eemail")
var enumber=document.querySelector("#enumber")
var epass=document.querySelector("#epass")
var ecpass=document.querySelector("#ecpass")
var storage=[]

var local=JSON.parse(localStorage.getItem("storage"))
if(local){
    storage=local
}



button.addEventListener("click",(e)=>{

 
   var regx=/^[a-zA-Z]{2,8}$/
   var regx1=/^[6-9][0-9]{9}$/
   var regx2=/^[@#A-Za-z0-9]{6,15}$/
    efirst.innerHTML=""
    elast.innerHTML=""
    eemail.innerHTML=""
    enumber.innerHTML=""
    epass.innerHTML=""
    ecpass.innerHTML=""
    var k=true
    if(first.value==""){
        efirst.innerHTML="enter the first name"    
        k=false
    }
    else if(regx.test(first.value)){
        efirst.innerHTML=""
    }
    else{   
        efirst.innerHTML="invalid first name"
        k=false
    }
    if(last.value==""){
        elast.innerHTML="enter the last name"    
        k=false
    }
    else if(regx.test(last.value)){
        elast.innerHTML=""
    }
    else{
        elast.innerHTML="invalid last name"
        k=false
    }
    if(email.value==""){
        eemail.innerHTML="enter the email"  
        k=false  
    }
    else{
        eemail.innerHTML=""
       

    }
    
    if(number.value==""){
        enumber.innerHTML="enter the mobile number"    
        k=false
    }
    else if(regx1.test(number.value)){
        enumber.innerHTML=""
    }
    else{
        enumber.innerHTML="invalid mobile number"
        k=false
    }
    if(pass.value ==""){
        epass.innerHTML="enter the password"  
        k=false  
    }
    else if(regx2.test(pass.value)){
        epass.innerHTML=""
    }
    else{
        epass.innerHTML="invalid password"
        k=false
    }
    
    if(cpass.value==pass.value){
       
        epass.innerHTML=""
    }
    else{
     
        ecpass.innerHTML="password is not matching"
        k=false
        }
   
        if(k){
            var object={
                first:first.value,
                last:last.value,
                number:number.value,
                email:email.value,
                pass:pass.value
            }
            storage.push(object)
            localStorage.setItem("storage",JSON.stringify(storage))
        }
        else{
            e.preventDefault()
        }

})