// start declaration of variables
const body = document.querySelector("body");
const nav = document.getElementById("nav-id");
const profile = document.getElementById("profile-id");
const cartempthy = document.getElementById("cart-empthy-id");
const bigImg = document.getElementById("big-img-id");
const smallImg = document.getElementById("small-img-id");
const plusmynis = document.getElementById("plus-mynis-id");
const span0 = document.getElementById("counter");
const addBtn = document.getElementById("add-btn-id");
const baskett = document.getElementById("baskett");
const basket = document.getElementById("basket");
const show = profile.classList.contains("active");
const ul = document.getElementsByTagName("ul");
const change = document.getElementById("change");

// categirieas 
const ACollections = document.getElementById("Collections");
const AMen  = document.getElementById("Men");
const  AWomen = document.getElementById("Women");
const  AAbout= document.getElementById("About");
const AContact= document.getElementById("Contact");
const spanC = document.getElementById("span-C");
const spanm = document.getElementById("span-m");
const spanw = document.getElementById("span-w");
const spana = document.getElementById("span-a");
const spanc = document.getElementById("span-c");
const small0ne = document.getElementById("small-1");
const smalltwo = document.getElementById("small-2");
const smallthree = document.getElementById("small-3");
const smallfour = document.getElementById("small-4");
const biggimg = document.getElementById("big-img-id");
const Value = document.getElementById("value");
const plus = document.getElementById("plus")
const counter = document.getElementById("counter");
const priceValue = document.getElementById("price-value");
const mynis = document.getElementById("mynis");
// cart CONTENT 

// confirm box
const confirmBox = document.querySelector(".price-confirm-box");
const priceStandart = document.getElementById("price-standart");
const counterCart = document.getElementById("counter-cart");
const equalPrice = document.getElementById("price-value-cart-empthy")
const deleteIcon = document.getElementById("delete-icon");
const confirmButton = document.getElementById("button-box-confirm");
const basketCounter = document.getElementById("basket-counter")
const textConfirm = document.getElementById("text-confirm")
const cartContent = document.getElementById("container-cart-content");
const textEmpthy = document.getElementById("text-empthy")
const confirmDelete = document.getElementById("confirm-delete");
const containerBar = document.getElementById("container-bar");
const logo = document.querySelector("logo")
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const menuOptions = document.querySelector(".menu-options")
const closeMenu = document.querySelector(".menu-options span");
const cartempthyid = document.getElementById("cart-empthy-id")
const spanCartEmptyTxt = document.getElementById("span-cart-empty.txt");
const width = window.innerWidth; 
const menu = document.getElementById("menu");
// start popup  variables 
const popup = document.querySelector(".popup");
const bigImgpopup = document.querySelector(".popup big-img");
const smallImgPopUp = document.getElementById("small-img-popup");
const closePopup = document.getElementById("close-popup");
const images = smallImgPopUp.getElementsByTagName("img");
const landingPage = document.getElementById("landing-page");
const popupImgBig = document.getElementById("popup-big-img");
const nex = document.getElementById("nex")
const pre = document.getElementById("pre")
const left = document.getElementById("left");
// end popup variables
 // payment methods variables 
const paymentMethod = document.querySelector(".payment-Methods");
const masterCard = document.querySelector(".master-card")
const CashOnDelvery = document.querySelector(".CashOnDelevery")
const parentPayments = document.querySelector(".parent-payments");
const closePaymentMethods = document.getElementById("close-payment-methods");
// end payment methods variables

const btn_mode= document.querySelector(".toggleButton");



function forDesktopStyle () {
 
 // nav bar 
 ACollections.onmouseenter = function () {
  spanC.style.setProperty("display","block")
  }

AMen.onmouseenter = function () {
      spanm.style.setProperty("display","block")
      spanC.style.setProperty("display","none")

      }
      AMen.onmouseleave = function () {
        spanm.style.setProperty("display","none")
        spanC.style.setProperty("display","block")

        }
        AWomen.onmouseenter = function () {
          spanw.style.setProperty("display","block")
          spanC.style.setProperty("display","none")

          }
          AWomen.onmouseleave = function () {
            spanw.style.setProperty("display","none")
            spanC.style.setProperty("display","block")

            }
            AAbout.onmouseenter = function () {
              spana.style.setProperty("display","block")
              spanC.style.setProperty("display","none")

              }
              AAbout.onmouseleave = function () {
                spana.style.setProperty("display","none")
                spanC.style.setProperty("display","block")

                }

                AContact.onmouseenter = function () {
                  spanc.style.setProperty("display","block")
                  spanC.style.setProperty("display","none")

                  

                  }
                  AContact.onmouseleave = function () {
                    spanc.style.setProperty("display","none")
                    spanC.style.setProperty("display","block")

                    }
                    // cataloge of pictures 


                     
 small0ne.onmouseenter = function () {
  small0ne.classList.add("active");
  smalltwo.classList.remove("active")
  smallthree.classList.remove("active")
  smallfour.classList.remove("active")
  bigImg.setAttribute("src","images/image-product-1.jpg")
}
small0ne.onmouseleave = function () {
  small0ne.classList.add("active");
  smalltwo.classList.remove("active")
  smallthree.classList.remove("active")
  smallfour.classList.remove("active")
  bigImg.setAttribute("src","images/image-product-2.jpg")
 }

smalltwo.onmouseenter = function () {
  smalltwo.classList.add("active");
  small0ne.classList.remove("active")
  smallthree.classList.remove("active")
  smallfour.classList.remove("active")
  bigImg.setAttribute("src","images/image-product-2.jpg")
}
smallthree.onmouseenter = function () {
  smallthree.classList.add("active");
  smalltwo.classList.remove("active")
  smallfour.classList.remove("active")
  small0ne.classList.remove("active")
  bigImg.setAttribute("src","images/image-product-3.jpg")

}
smallfour.onmouseenter = function () {
  smallfour.classList.add("active");
  smalltwo.classList.remove("active")
  smallthree.classList.remove("active")
  small0ne.classList.remove("active")
  bigImg.setAttribute("src","images/image-product-4.jpg")
}
}
forDesktopStyle()


// start login  icon function 
const login = document.querySelector(".login");
login.addEventListener("click", function() {
  location.href = "login.html";
});
// end login function 


// dark mode 
btn_mode.addEventListener("click", function() {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    document.querySelector(".nav-bar").classList.remove("dark-theme");
    btn_mode.style.setProperty("background","white")
    
  } else {
    body.classList.add("dark-theme");
    document.querySelector(".nav-bar").classList.add("dark-theme");
    btn_mode.style.setProperty("background","white");
  }
});
// end darkmode 

basket.onclick = () => {
  cartempthyid.style.setProperty("display","block");
}

// start fix probleme in 
function prefixAll () {
  bigImg.style.setProperty("cursor","inherit");
  previous.style.cssText = "float:left;margin-top:50%;width:7%;margin-left:5%;z-index:10;position:absolute;cursor:pointer;"
  next.style.cssText = "float:right;position:sticky;margin-top:-50%;width:7%;margin-right;cursor:pointer;"
}
prefixAll()

function ResetAllOption () {
// reset all options 
window.onload = function () {
parentPayments.style.setProperty("display","none")
  menuOptions.style.setProperty("display","none")
  profile.classList.remove("active")
  small0ne.classList.add("active");
  smalltwo.classList.remove("active")
  smallthree.classList.remove("active")
  smallfour.classList.remove("active")
  bigImg.setAttribute("src","images/image-product-1.jpg")
  spanC.style.setProperty("display","block")
     equalPrice.textContent = priceValue.textContent;
    basketCounter.style.setProperty("display","none")
    cartContent.style.setProperty("display","none")
    textEmpthy.style.setProperty("display","block")
    confirmDelete.style.setProperty("display","none");
    cartempthy.style.setProperty("display","none");
    popup.style.setProperty("display","none")
  }
  // end when app do refrech 
}
ResetAllOption()


 function sendLocationToDB(){
    if ('geolocation' in navigator) {
      console.log("geolocation is avilable")
      navigator.geolocation.getCurrentPosition(async position => {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
  const data = {lat,lon};
  const options = {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
  }
   fetch("/api", options)
   .then(res => res.json())
   .then(response => console.log('Form data received'))
   .catch(error => console.error('Error:', error));
   });
  } else {
      console.log("erour");
  }

  }
  
profile.onmouseenter = function (){
   cartempthy.style.cssText = "display: block;"
   profile.classList.add("active");
   basket.style.setProperty("box-shadow","0px 0px 23 01 var(--main-orange)");
   if (profile.classList.contains("active")) {
     profile.onclick = function () {
       cartempthy.style.cssText = "display:block;"
     }
   }
 }

 
 cartempthy.onmouseleave = function () {
   cartempthy.style.setProperty("display","none")
 }


 function paymentSttleForMobile () {
  paymentMethod.style.cssText = "flex-direction: column;";
//  document.querySelector('.master-card').style.cssText = 'width:60%;';
  CashOnDelvery.style.cssText = 'width:50%; ';
  parentPayments.style.cssText = "-120% 0%;";
  masterCard.style.setProperty("width","60%");
  }


function forMobileStyle (){
  paymentSttleForMobile()
  document.querySelector('.login').style.setProperty("display","none");
  document.querySelector('.toggleButton').style.setProperty('display','none');
  // console.log(width);
  landingPage.onclick = () => {
  cartempthyid.style.setProperty("display","none")
  }
  basket.onclick = function () {
    cartempthyid.style.cssText = "display: block; width: 96%;margin: 1% 0% 0% 2%;height: 33%;"
  
   cartempthy.style.setProperty("display","block");
   profile.classList.add("active");
   }
  menu.setAttribute("src", "images/icon-menu.svg");
  menu.style.cssText = "height:18%; margin:0 4%; cursor:pointer;";
  document.getElementById("logo").style.cssText = "margin-right:-6%;"
document.getElementById("change").style.cssText = "display:none;"
document.querySelector(".basket").style.cssText = "margin:auto;"
document.getElementById("profile-id").style.cssText = "height:40%; cursor:pointer;margin: 0 6% 0 -21%;"
  document.getElementById("logo").style.cssText = "margin-right: -35px";
  document.querySelector(".nav-bar").style.setProperty("height","80px");
 const hr =  document.getElementById("hr[0]");
 hr.remove()
document.getElementById("cart-empthy-id").style.cssText = "display:none; width:96%;";
document.getElementById("landing-page").style.setProperty("flex-direction","column");
document.getElementById("left").style.cssText = "margin:-1% 0 0 0; width:100%;";
document.getElementById("big-img-id").style.cssText = "width:100%; border-radius:0px;"
document.getElementById("small-img-id").style.setProperty("display","none");
const right = document.getElementById("right")
right.style.cssText = "margin-top:4%; width:85%";
const price = document.getElementById("price");
price.style.cssText = "flex-direction:row; font-size:x-large;margin-bottom:9%; justify-content: space-between;";
const addCard = document.getElementById("add-card");
addCard.style.cssText = "flex-direction:column; height:100%";
const pricevalue = document.getElementById("price-value");
pricevalue.style.setProperty("margin-right","25%");
document.getElementById("plus-mynis-id").style.cssText = "width:100%; height:45px"
document.getElementById("add-btn-id").style.cssText = "width:100%;margin: 5% 0% 8% 0%; height:45px;";
document.querySelector(".add-btn span").style.setProperty("font-size","18px");

menuOptions.onclick = () => {
  cartempthyid.style.setProperty("display","none");
}

 profile.onmouseenter = function (){
  // spanCartEmptyTxt.style.setProperty("font-weight:100;")
  cartempthyid.style.cssText = "display: block; width: 96%;margin: 1% 0% 0% 2%;height: 33%;"
   cartempthy.style.setProperty("display","block");
   profile.classList.add("active");
   basket.style.setProperty("box-shadow","0px 0px 23 01 var(--main-orange)");
   if (profile.classList.contains("active")) {
     profile.onclick = function () {
       cartempthy.style.cssText = "display:block;margin: 1% 0% 0% 2%;width: 96%;"
       menuOptions.style.setProperty("display","none")
     }
   }
 }
 deleteCartContent()
 // payment style of mobile less than or equal to 600 px 

}

function deleteCartContent () {
  deleteIcon.onclick = function () {
    // alert("im from mohamed")
    confirmDelete.style.cssText = "display:block; width:12%; margin-left:72%; margin-top:-8%; transition: all 3s; cursor:pointer;";
    deleteIcon.style.cssText = "transition:all 3s; display:none;"
     if(confirmDelete.hasAttribute("src")) {
        confirmDelete.onclick = function () {
          cartContent.style.cssText = "display: none;"
          textEmpthy.style.setProperty("display","block")
          profile.classList.remove("active")
          basketCounter.innerText = 0;
          counter.innerText = 0
        } 
     }
  }
}

deleteCartContent()


function countproducts () {
 let count = 0;
 plus.onclick = function () {
   count++;
   counterCart.textContent = count;
   textEmpthy.style.setProperty("display","none");
   cartContent.style.setProperty("display","block");
   basketCounter.style.setProperty("display","block");
   profile.classList.add("active")
 const priceconvert =+ priceStandart.textContent;
 parseFloat(priceconvert);
  counter.textContent = count;
  priceStandart.textContent = count * 125;
  basketCounter.textContent = count;
   counterCart.textContent = count;
 if (basketCounter < 0) {
   basketCounter.textContent = 0;
   priceStandart.textContent = 0
 }
   if (count <= 0 ) {
     counter.textContent = 0;
     priceStandart.textContent = 125;
     basketCounter.textContent = 0;
     profile.classList.remove("active");
   } else if (count > 0) {
    profile.classList.add("active");

   } 
   if (priceStandart.textContent === '1250'){
    let confirme =  confirm("hello are you a big seller mc")
    if (confirme === true) {
     
    }
  }
}

  mynis.onclick = function () {
    count--;
    counter.textContent = count;
    basketCounter.textContent = count;
    priceStandart.textContent = count * 125;
    priceValue.textContent = 125;
  
  if (count <= 0 ) {
    counter.textContent = 0;
    basketCounter.textContent = 0;
    priceStandart.textContent = 125
    cartContent.style.setProperty("display","none");
    textEmpthy.style.setProperty("display","block")
    textEmpthy.style.setProperty("display","block");
    counter.textContent = 0;
  }
  }
     if(confirmDelete.hasAttribute("src")) {
      confirmDelete.onclick = function () {
       console.log(count)
        cartContent.style.cssText = "display: none;"
        textEmpthy.style.setProperty("display","block")
        profile.classList.remove("active");
        basketCounter.textContent = 0;
        counter.textContent = 0 ;
      } 
   }
}

let c = 1;
next.onclick = (e) => {
  bigImg.style.cssText = "width:100%;width: 100%;border-radius: 0px;cursor: inherit;"
  left.style.cssText = "align-items:normal; width:100%; margin:auto" ;
  c++;
  if(c === 1) {
    // alert("one")
    bigImg.setAttribute("src","images/image-product-1.jpg");
  }if(c === 2) {
    // alert("two")
    bigImg.setAttribute("src","images/image-product-2.jpg");
  }else if(c === 3) {
    // alert("three")
    bigImg.setAttribute("src","images/image-product-3.jpg");
  } else if(c === 4) {
    // alert("four")
    bigImg.setAttribute("src","images/image-product-4.jpg");
  }else if (c >= 5){
    bigImg.setAttribute("src","images/image-product-1.jpg");
    // alert("break else baby")
    let cm = 1;
    return c =+ cm;
  }
} 
previous.onclick = (e) => {
  c--;
 bigImg.style.cssText = "width:100%;"

  if(c === 1) {
    // alert("one")
    bigImg.setAttribute("src","images/image-product-1.jpg");
  }else if(c === 2) {
    // alert("two")
    bigImg.setAttribute("src","images/image-product-2.jpg");
  }else if(c === 3) {
    // alert("three")
    bigImg.setAttribute("src","images/image-product-3.jpg");
  }else if(c === 4) {
    // alert("four")
    bigImg.setAttribute("src","images/image-product-4.jpg");
  } else if (c <= 0){
    bigImg.setAttribute("src","images/image-product-1.jpg");
    return c = 1;
  }
 
 
}
next.onmouseenter = () => {
  next.style.setProperty('filter', 'drop-shadow(red 16px 16px 20px) invert(75%)');
  next.style.setProperty('box-shadow', '74px 3px green, -1em 0 1.4em black');
}

next.onmouseleave = () => {

  next.style.setProperty('filter', 'none');
  next.style.setProperty('box-shadow', 'none');
}
previous.onmouseenter = () => {
  previous.style.setProperty('filter','drop-shadow(red 16px 16px 20px) invert(75%)');
  previous.style.setProperty('box-shadow', '0px 0px white, 1em 0 1.9em');
}

previous.onmouseleave = () => {

  previous.style.setProperty('filter', 'none');
  previous.style.setProperty('box-shadow', 'none');
}
menu.onclick = () => {
  menuOptions.style.cssText ="position:fixed; width:60%;height:120%;background:white;margin: -22% 0% 0% -40%;"
  next.style.setProperty("display","none");
  previous.style.setProperty("display","none");
  document.querySelector(".menu-options ul").style.cssText = "display:flex; flex-direction:column;width:100%;margin:45% 0% 0% -5%;";
  closeMenu.style.cssText = "margin: -31% 7% 20% 0%;";
}

bigImg.onclick = () => {
  menuOptions.style.cssText = "display:none"
}
baskett.onclick = () => {
  menuOptions.style.cssText = "display:none"
}
closeMenu.onclick = () => {
  menuOptions.style.cssText = "margin-left:-160%;display:none;" ;
  next.style.setProperty("display","block");
  previous.style.setProperty("display","block");
}



// setInterval( mediaQuery_F(), 50, 'Parameter 1', 'Parameter 2');


if(width < 600 ) {
  countproducts();
  forMobileStyle();  
  // sendLocationToDB()
} else if (width > 600) {
  forDesktopStyle()
  countproducts();
  next.style.setProperty("display","none")
  previous.style.setProperty("display","none");
  bigImg.style.setProperty("margin","0% 0% 0% 25%");
  bigImg.onclick = () => {
  popup.style.setProperty("display","block");
  nav.style.setProperty("filter","blur(2px)")
  landingPage.style.setProperty("filter","blur(2px)");
}


closePopup.onclick = () => {
  popup.style.setProperty("display","none");
  nav.style.setProperty("filter","none");
  landingPage.style.setProperty("filter","none");
}
images[0].onmouseenter = () => {
  popupImgBig.setAttribute("src","images/image-product-1.jpg")
  images[0].classList.add("active");
  images[1].classList.remove("active");
  images[2].classList.remove("active");
  images[3].classList.remove("active");
}
images[1].onmouseenter = () => {
    popupImgBig.setAttribute("src","images/image-product-2.jpg")
  images[0].classList.remove("active");
  images[1].classList.add("active");
  images[2].classList.remove("active");
  images[3].classList.remove("active");
}
images[2].onmouseenter = () => {
  popupImgBig.setAttribute("src","images/image-product-3.jpg")
  images[0].classList.remove("active");
  images[1].classList.remove("active");
  images[2].classList.add("active");
  images[3].classList.remove("active");
}

images[3].onmouseenter = () => {
  popupImgBig.setAttribute("src","images/image-product-4.jpg")
  images[0].classList.remove("active");
  images[1].classList.remove("active");
  images[2].classList.remove("active");
  images[3].classList.add("active");
}


var countpopup = 0;
nex.onclick = () => {
countpopup++;
if(countpopup === 0){
  popupImgBig.setAttribute("src","images/image-product-1.jpg");

}
else if(countpopup=== 1){
  popupImgBig.setAttribute("src","images/image-product-2.jpg");

}
else if(countpopup=== 2){
  popupImgBig.setAttribute("src","images/image-product-3.jpg");


}
else if(countpopup=== 3){
  popupImgBig.setAttribute("src","images/image-product-4.jpg");

} 
if(countpopup > 3) {
return countpopup === 3
}
if(countpopup < 0) {
  return countpopup === 0;
 }
}
}

pre.onclick = () => {
  countpopup--;
  if(countpopup=== 0){
    popupImgBig.setAttribute("src","images/image-product-1.jpg");
  }else if(countpopup=== 1){
    popupImgBig.setAttribute("src","images/image-product-2.jpg");
  }else if(countpopup=== 2){
    popupImgBig.setAttribute("src","images/image-product-3.jpg");
  }else if(countpopup=== 3){
    popupImgBig.setAttribute("src","images/image-product-4.jpg");
  } 
  if(countpopup < 0) {
    return countpopup === 0;
   }
}

masterCard.onclick = () => {
  // alert("im master-card")
    }
    CashOnDelvery.onclick = () => {
      sendLocationToDB()
    }

function paymentMethods () {
  addBtn.onclick = () => {
    if(counter.textContent >= 1 && width > 600) {
      closePaymentMethods.style.cssText = "margin: 0% 0% 0% 10%"
      parentPayments.style.setProperty("display","block");
      nav.style.cssText = "filter:blur(2px); pointer-events:none;"
      landingPage.style.cssText = "filter:blur(2px); pointer-events:none;";
     document.querySelector(".master-card img").style.cssText = "position: relative;"
    } else if (counter.textContent >= 1 && width < 600){
      addBtn.onclick = () => {
        parentPayments.style.cssText = "display: block;pointer-events: visible;position: fixed;";
        nav.style.cssText = "pointer-events:none; filter:blur(3px);"
        landingPage.style.cssText = "pointer-events:none; filter:blur(3px); display:block";
        document.querySelector(".master-card img").style.cssText = "position: relative;"
         document.querySelector(".master-card").style.cssText = "width:60%;";
         CashOnDelvery.style.setProperty("width","60%");
         closePaymentMethods.style.setProperty("margin","15% 0%");
         paymentMethod.style.setProperty("margin","-130% 0% 0% 0%")
      }
    }
   closePaymentMethods.onclick = () => {
   location.reload();
   }
  }
}

paymentMethods()







   

 
 
