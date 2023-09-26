var storage=[{
    id:"div1",
    source:"./images/shirt1.jpg",
    head:"shirt1",
    price:"1500",
    incart:false
},{
    id:"div2",
    source:"./images/tshirt1.jpg",
    head:"tshirt",
    price:"500",
    incart:false
    
},{
    id:"div3",
    source:"./images/tshirt2.jpg",
    head:"tshirt2",
    price:"800",
    incart:false
},
{
    id:"div4",
    source:"./images/tshirt3.jpg",
    head:"tshirt3",
    price:"300",
    incart:false
},

]
var main=document.querySelector("main")
var side=document.querySelector("#cart")
var x=document.querySelector("#x")
var p=document.querySelector("p")
var cartitem=document.querySelector(".cart-item-cont")
function shoping(){
    cart()
    addCart()
    shut()
}
shoping()
function cart(){
    storage.map((E)=>{
        main.innerHTML +=`<div id="${E.id}">
        <img src="${E.source}" alt="">
        <h2>${E.head}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div>
            <h3>${E.price}</h3>
           
        </div> 
        <button class="button"> <i class="fa-solid fa-cart-shopping" id="-i"></i></button>
    </div>` 
    })

}
function addCart(){
    var button=document.querySelectorAll(".button")
button.forEach((e)=>{
    e.addEventListener("click",()=>{
        side.style.right="0" ;

        var parentid=e.parentElement.id
       

        storage.forEach((e)=>{
            if(e.id==parentid && e.incart==false){
             cartitem.innerHTML +=`<div class="cart-item">
            
         <div><img src=${e.source} alt="" loading="lazy"></div>
          <div>
              <h3>${e.head}</h3>
              <h4>Rs.${e.price}</h4>
              <input type="number" class="poda" value=1>
          </div>
         <div><span class="sub">Rs.${e.price}</span> <i class="fa-solid fa-trash" ></i></div>
         </div>`
         
       
            }
            del()
            calcu()
           total()
        })


    })
})
}
function del(){
    var rem=document.querySelectorAll(".fa-solid.fa-trash")

    rem.forEach((a)=>{
        a.addEventListener("click",()=>{

        var temp=a.parentElement.parentElement
            var god=temp.querySelector("h3")
        storage.forEach((e)=>{
            if(god.innerHTML==e.head){
                e.incart=false
            }
        })
        temp.remove()


        total()
        })
    })
  
}

function calcu(){
    var poda =document.querySelectorAll(".poda")
    poda.forEach((e)=>{
        e.addEventListener("input",()=>{
            if(isNaN(e.value) || e.value<1){
                e.value=1
            }
       var parent=e.parentElement.parentElement
       var price=parent.querySelector("h4").innerHTML.replace("Rs.","")
       var subtotal=parent.querySelector(".sub")
       subtotal.innerHTML=`Rs.${(price*e.value)}`
            total()
        })     
    })
}

function shut(){
x.addEventListener("click",()=>{

    side.style="right:-100%"
})
p.addEventListener("click",()=>{
    side.style="right:0%"
})
}


function total(){
    var ftotal=document.querySelector("#total")

    var sub=document.querySelectorAll(".sub")
    var subt=0
    sub.forEach((e)=>{
       e = parseInt(e.innerHTML.replace("Rs.",""))
        subt += e
    })
    
    if(sub.length>0){
        ftotal.innerHTML=`Total Rs ${subt}` 
    }
    else{
        ftotal.innerHTML=""
    }
}



