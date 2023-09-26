var user=document.querySelector("#user")
var pass=document.querySelector("#pass")
var form=document.querySelector("form")
var euser=document.querySelector("#euser")
var epass=document.querySelector("#epass")
var esub=document.querySelector("#esub")

var storage=JSON.parse(localStorage.getItem("storage"))
var index=0
var demo=false
form.addEventListener("submit",(event)=>{

    euser.innerHTML = "";
    epass.innerHTML = "";
    esub.innerHTML = "";
    var valid =true
  
   if(user.value =="" && pass.value==""){
    euser.innerHTML="user name is required"
    epass.innerHTML="password is required"
    valid =false
    demo=true
   } 
    if(user.value ==""){
        euser.innerHTML="user name is required"
    valid =false
    demo=true
    }
    else if(pass.value ==""){
        epass.innerHTML="password is required"
        valid =false
        demo=true
    }
    
    storage.map((e)=>{
        if(user.value ==e.number  && pass.value ==e.pass){
            alert('login successfull')
           valid =true
           demo=true
            
        }
    })
   
  

   
    if(demo== false)
    {
        esub.innerHTML="pagal go away"
        valid=false

    }
   if(!valid){
    event.preventDefault()
   }

})