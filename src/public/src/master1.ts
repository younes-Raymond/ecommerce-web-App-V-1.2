// document.addEventListener("DOMContentLoaded", function () {


var  nav = document.querySelector("#nav-id") as HTMLElement;

var profile = document.getElementById("profile-id") as HTMLElement;
var cartempthy = document.getElementById("cart-empthy-id") as HTMLDivElement;
var bigImg = document.getElementById("big-img-id") as HTMLImageElement;
var smallImg = document.getElementById("small-img-id") as HTMLImageElement;
var plusmynis = document.getElementById("plus-mynis-id") as HTMLElement;
var addBtn = document.getElementById("add-btn-id") as HTMLElement;
var baskett = document.getElementById("baskett") as HTMLElement;
var basket = document.getElementById("basket") as HTMLElement;
var menuOPtion = document.querySelector(".menu-options ul") as HTMLUListElement

// categirieas 

var ACollections = document.getElementById("Collections") as HTMLElement;
var AMen  = document.getElementById("Men") as HTMLAnchorElement;
var AWomen = document.getElementById("Women") as HTMLElement;
var AAbout= document.getElementById("About") as HTMLElement;
var AContact= document.getElementById("Contact") as HTMLElement;
var spanC = document.getElementById("span-C") as HTMLSpanElement;
var spanm = document.getElementById("span-m") as HTMLSpanElement;
var spanw = document.getElementById("span-w") as HTMLSpanElement;
var spana = document.getElementById("span-a") as HTMLSpanElement;
var spanc = document.getElementById("span-c") as HTMLSpanElement;
var small0ne = document.getElementById("small-1") as HTMLImageElement;
var smalltwo = document.getElementById("small-2") as HTMLImageElement ;
var smallthree = document.getElementById("small-3") as HTMLImageElement;
var smallfour = document.getElementById("small-4") as HTMLImageElement  ;
// var biggimg = document.getElementById("big-img-id") as HTMLImageElement ;
var Value = document.getElementById("value") as HTMLElement;
var plus = document.getElementById("plus")as HTMLElement;
var counter: HTMLSpanElement = document.getElementById('counter')!;
var imgMastrCard = document.getElementById("master-card-img");


var priceValue = document.getElementById("price-value") as HTMLElement;
var mynis = document.getElementById("mynis") as HTMLSpanElement;
// cart CONTENT 

// confirm box
var confirmBox = document.querySelector(".price-confirm-box") as HTMLElement;
var priceStandart = document.getElementById("price-standart") as HTMLElement;
var counterCart = document.getElementById("counter-cart") as HTMLElement;
var equalPrice = document.getElementById("price-value-cart-empthy") as HTMLElement
var deleteIcon = document.getElementById("delete-icon")as HTMLElement;
var confirmButton = document.getElementById("button-box-confirm")as HTMLElement;
var basketCounter = document.getElementById("basket-counter")!as HTMLSpanElement
var textConfirm = document.getElementById("text-confirm")as HTMLElement
var cartContent = document.getElementById("container-cart-content")as HTMLElement;
var textEmpthy = document.getElementById("text-empthy")as HTMLElement
var confirmDelete = document.getElementById("confirm-delete")as HTMLElement;
var containerBar = document.getElementById("container-bar")as HTMLElement;
var logo = document.getElementById("logo")as HTMLDivElement
var previous = document.getElementById("previous")as HTMLImageElement;
var next = document.getElementById("next")as HTMLElement;
var menuOptions = document.querySelector(".menu-options")as HTMLElement
var closeMenu = document.querySelector(".menu-options span")as HTMLSpanElement;
var cartempthyid = document.getElementById("cart-empthy-id")as HTMLElement
var spanCartEmptyTxt = document.getElementById("span-cart-empty.txt")as HTMLElement;
var About_US_Page = document.querySelector(".About_US_Page") as HTMLElement;
var width:number = window.innerWidth || 0; 
var menu = document.getElementById("menu") as HTMLElement;
// start popup  variables 
var popup = document.querySelector(".popup") as HTMLElement;
var bigImgpopup = document.querySelector(".popup big-img") as HTMLImageElement;
var smallImgPopUp = document.getElementById("small-img-popup") as HTMLElement;
var closePopup = document.getElementById("close-popup") as HTMLElement;
var images = document.getElementsByTagName("img");
var landingPage = document.getElementById("landing-page") as HTMLDivElement;

var popupImgBig = document.getElementById("popup-big-img") as HTMLElement;
var nex = document.getElementById("nex") as HTMLElement;
var pre = document.getElementById("pre") as HTMLElement;
var left = document.getElementById("left") as HTMLElement;
// end popup variables
var login = document.querySelector(".login") as HTMLDivElement;
var loginimg = document.querySelector('.login img') as HTMLImageElement;
var logintxt = document.querySelector('.login div') as HTMLDivElement;
var navBar = document.querySelector('.nav-bar') as HTMLElement;


// payment methods variables 
var paymentMethod = document.querySelector(".payment-Methods") as HTMLDivElement;
var masterCard = document.querySelector(".master-card") as HTMLElement;
var CashOnDelvery = document.querySelector(".CashOnDelevery") as HTMLDivElement
var parentPayments = document.querySelector(".parent-payments")as HTMLElement;
var closePaymentMethods = document.getElementById("close-payment-methods");
var seller:string = "younes ";

// footer 
var footerAOne = document.getElementById('footer-a_[0]_About') as HTMLAnchorElement;
var footerATwo = document.getElementById('footer-a_[1]_Contant') as HTMLAnchorElement;
var footerAThree = document.getElementById('footer-a_[2]_privacyPolicy') as HTMLAnchorElement;
var men_category_list = document.querySelector('.men-category-list') as HTMLDivElement
var Women_category_list = document.querySelector('.Women-category-list') as HTMLDivElement


var  count: number = 0;
window.onload = function () {
  
AMen.addEventListener('click' ,function () {
    window.location.href = "/Men";
  });

AWomen.addEventListener('click' , () => { // this what i talking  about  we need to do something here   
    window.location.href = "/women";
    bigImg.setAttribute("src",'images/Women/pinckyNike.jpg');
    
 })

 AContact.addEventListener('click',() => {
  window.location.href = "/contact-us"
 });

ACollections.addEventListener('click',() => {
  window.location.href = "/Home"
 })
 AAbout.addEventListener('click',() => {
  window.location.href = "/about-us"
 });

 
 if (CashOnDelvery&& masterCard){
 CashOnDelvery.addEventListener('click' ,function () {
  window.location.href = "/Map";
});
masterCard.addEventListener('click' ,function () {
  window.location.href = "/payment-card";
});
}

if (footerAOne && footerATwo && footerAThree){
footerAOne.addEventListener('click',()=> {
  window.location.href = "/about-us"
})
footerATwo.addEventListener('click',()=> {
  window.location.href = "/contact-us"
})
footerAThree.addEventListener('click',()=> {
  alert('you should to create privacy policy  page , i have no time to do it now ')
  // window.location.href = "/"
})
}
// login event router
  login.addEventListener("click", function(e) {
    window.location.href = "main-login";
   const navBar = document.getElementById('nav-id') as HTMLDivElement;
   if(navBar) {
    navBar.style.cssText = "position: absolute; margin-top: -27%;  margin-left: -34%;"
    // alert('nav bar is ready to go')
    }
    e.preventDefault();
  });

 
  let countFromStorage = localStorage.getItem('count');

  if (countFromStorage !== null) {
    count = parseInt(countFromStorage, 10);
    if(isNaN(count)) {
      // alert('local storage is not contain number ')
    }
  }
  function  prefixAll () {
    basketCounter.style.setProperty("display","block");
    parentPayments.style.setProperty("display","none");
    menuOptions.style.setProperty("display","none");
    if(men_category_list){
    men_category_list.style.setProperty('display','none')
  }
      profile.classList.remove("active")
      small0ne.classList.add("active");
      smalltwo.classList.remove("active")
      smallthree.classList.remove("active")
      smallfour.classList.remove("active")

    const prefixAllUrl = () => { 
      if (window.location.href.includes('http://localhost:3000/women')){
      bigImg.setAttribute("src","images/Women/pinckyNike1.jpg");
      small0ne.setAttribute('src','images/Women/pinckyNike1.jpg');
      smalltwo.setAttribute('src','images/Women/pinckyNike2.jpg');
      smallthree.setAttribute('src','images/Women/pinckyNike3.jpg');
      smallfour.setAttribute('src','images/Women/pinckyNike4.jpg');    
      const root = document.documentElement;
      const styles = window.getComputedStyle(root);
      const mainOrange = styles.getPropertyValue('--main-orange');
      console.log(mainOrange);
      root.style.setProperty('--main-orange', '#ff6782');
      spanw.style.setProperty('display','block')
      small0ne.onmouseenter = function () {
        small0ne.classList.add("active");
        smalltwo.classList.remove("active")
        smallthree.classList.remove("active")
        smallfour.classList.remove("active")
        bigImg.style.setProperty('margin','0% 25%')
        bigImg.setAttribute("src","images/Women/pinckyNike1.jpg");
      }
      small0ne.onmouseleave = () => {
        small0ne.classList.add("active");
        smalltwo.classList.remove("active")
        smallthree.classList.remove("active")
        smallfour.classList.remove("active")
        bigImg.style.setProperty('margin','0% 25%')
        bigImg.setAttribute("src","images/Women/pinckyNike1.jpg");
      }
       smalltwo.onmouseenter = function () {
        smalltwo.classList.add("active");
        small0ne.classList.remove("active")
        smallthree.classList.remove("active")
        smallfour.classList.remove("active")
        bigImg.setAttribute("src","images/Women/pinckyNike2.jpg");

      }
      
      smallthree.onmouseenter = function () {
        smallthree.classList.add("active");
        smalltwo.classList.remove("active")
        smallfour.classList.remove("active")
        small0ne.classList.remove("active")
        bigImg.setAttribute("src","images/Women/pinckyNike3.jpg");
      }
      
      smallfour.onmouseenter = function () {
        smallfour.classList.add("active");
        smalltwo.classList.remove("active")
        smallthree.classList.remove("active")
        small0ne.classList.remove("active")
        bigImg.setAttribute("src","images/Women/pinckyNike4.jpg");

      }
    
      } else if (window.location.href.includes('http://localhost:3000/Men')){
        bigImg.setAttribute("src","images/image-product-1.jpg");
      } else if (window.location.href.includes('http://localhost:3000/Home') || window.location.href.includes('http://localhost:3000') ) {
        bigImg.setAttribute("src","images/image-product-1.jpg")
      }
    } 
    prefixAllUrl()
      spanC.style.setProperty("display","block")
      // equalPrice.textContent = priceValue.textContent;
        cartContent.style.setProperty("display","none")
        textEmpthy.style.setProperty("display","block")
        confirmDelete.style.setProperty("display","none");
        cartempthy.style.setProperty("display","none");
        popup.style.setProperty("display","none");
        menuOptions.style.setProperty('display','none');
    textEmpthy.style.setProperty('display','none');
    cartContent.style.setProperty('display','block');
    basketCounter.style.setProperty('display','block');
    previous.style.setProperty('display','none');
    }


if (count > 0){
(basketCounter as HTMLElement).textContent = count.toString();
// alert('basketcounter pricevalue is difined')
}

if (counter){
(counter as HTMLElement).textContent = count.toString();
(priceValue as HTMLElement).textContent = '125';
// alert('is bigger than 0');
prefixAll()
}

else{
  // alert('the count is less than 0');
  prefixAll();
}
if (counter && plus){
  (counter as HTMLSpanElement).textContent = count.toString();
plus.addEventListener('click',function(): void{
  count++;
;  localStorage.setItem('count', count.toString());    
  (counterCart as HTMLElement).textContent = count.toString();
  textEmpthy.style.setProperty("display","none");
  cartContent.style.setProperty("display","block");
  basketCounter.style.setProperty("display","block");
  profile.classList.add("active");
// @ts-ignore
const priceconvert: number = parseInt((priceStandart as HTMLElement).textContent, 10);
  (counter as HTMLElement).textContent = count.toString();
  (priceStandart as HTMLElement).textContent = (count * 125).toString();
  (basketCounter as HTMLElement).textContent = count.toString();
  (counterCart as HTMLElement).textContent = count.toString();
if (count <= 0) {
(counter as HTMLElement).textContent = "0";
(priceStandart as HTMLElement).textContent = "125";
(basketCounter as HTMLElement).textContent = "0";
profile.classList.remove("active");
} else if (count > 0) {
profile.classList.add('active');
}
if ((priceStandart as HTMLElement).textContent === '1250'){
let confirme = confirm(`are a big seller mc ${seller}`)
if (confirme === true){
}
}
 });
}

 // end plus event 
if (mynis){
  mynis.onclick = function (): void {
     count--
    (counter as HTMLElement).textContent = count.toString();
    (basketCounter as HTMLElement).textContent = count.toString();
    (priceStandart as HTMLElement).textContent = (count * 125).toString();
    (priceValue as HTMLElement).textContent = "125";
  
    if (count <= 0 ) {
      (counter as HTMLElement).textContent = "0";
      (basketCounter as HTMLElement).textContent = "0";
      (priceStandart as HTMLElement).textContent = "125";
      cartContent.style.setProperty("display","none");
      textEmpthy.style.setProperty("display","block");
      textEmpthy.style.setProperty("display","block");
      (counter as HTMLElement).textContent = "0";
    }
  }
}
}






interface ModeButton extends HTMLButtonElement {
  mode: 'light' | 'dark';
}

document.addEventListener("DOMContentLoaded", function () {

  const btn_mode = document.querySelector('.toggleButton') as ModeButton;
  btn_mode.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    navBar?.classList.remove('dark-theme');
    btn_mode.classList.toggle('bg-white');
    btn_mode.mode = 'light';
  } else {
    body.classList.add('dark-theme');
    navBar?.classList.add('dark-theme');
    btn_mode.style.setProperty('background', 'black');
    btn_mode.style.cssText = "border-radius:10px; background:white;"
    btn_mode.mode = 'dark';
  }
}
});

// end darkmode 


function forDesktopStyle () {
 if (ACollections) {
  ACollections.onmouseenter = function () {
    spanC.style.setProperty("display","block")
  }
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

// let URL =  ['http://localhost:3000/Men','http://localhost:3000/Women','http://localhost:3000/about-us','http://localhost:3000/contact-us','http://localhost:3000/Home']
// window.location.href.includes(URL[0])=> 


if (small0ne && smalltwo && smallthree&& smallfour){
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
}
forDesktopStyle()

basket.onclick = () => {
  cartempthyid.style.setProperty("display","block");
}

// start fix probleme in 
document.addEventListener('DOMContentLoaded', ()=> {

if (bigImg){
function prefixAll () {
  bigImg.style.setProperty("cursor","inherit");
  previous.style.cssText = "float:left;margin-top:50%;width:7%;margin-left:5%;z-index:10;position:absolute;cursor:pointer;"
}
prefixAll()
}
})

profile.onmouseenter = function (){
  if (cartempthy){
   cartempthy.style.cssText = "display: block;"
  }
   profile.classList.add("active");
   basket.style.setProperty("box-shadow","0px 0px 23 01 var(--main-orange)");
   if (profile.classList.contains("active")) {
     profile.onclick = function () {
       cartempthy.style.cssText = "display:block;"
     }
   }
 }


document.addEventListener("DOMContentLoaded", function() {
  const cartempthy = document.getElementById("cart-empthy-id") as HTMLDivElement;
  if (cartempthy) {
  // your code here
  cartempthy.onmouseleave = function () {
       cartempthy.style.setProperty("display","none")
      
     }
    } else{

      // alert('cart empthy is null')
    }
  });

  
 function paymentStyleForMobile () {
  CashOnDelvery.style.cssText = 'width:50%; ';
  parentPayments.style.cssText = "margin: -83% -10% 0%;";
  masterCard.style.setProperty("width","60%");
  }

function forMobileStyle (){
  paymentStyleForMobile()
  previous.style.cssText = 'display:block;';
  next.style.cssText = "float:right;position:sticky;margin: -49% 2% 0% 0%;width:7%;cursor:pointer;"
  login.style.setProperty("display","none");
  loginimg.style.setProperty('display','none');
  logintxt.style.setProperty('display','none')
  const btn_mode = document.querySelector('.toggleButton') as ModeButton;
  btn_mode.style.setProperty('display','none');
  // console.log(width);
  landingPage.onclick = () => {
  cartempthyid.style.setProperty("display","none")
  }

  basket.onclick = function () {
    cartempthyid.style.cssText = "display: block; width: 96%;margin: 1% 0% 0% 2%;height: 30%;"
  
   cartempthy.style.setProperty("display","block");
   profile.classList.add("active");
   }

  menu.setAttribute("src", "images/icon-menu.svg");
  menu.style.cssText = "height:18%; margin:0px -1%; cursor:pointer;";
  login.style.cssText = "margin-right:-6%;"

const change = document.getElementById("change") as HTMLElement
change.style.cssText = "display:none;"
basket.style.cssText = "margin:auto;"
profile.style.cssText = "height:40%; cursor:pointer;margin: 0 6% 0 -5%;"
if(logo){
  logo.style.cssText = "margin-left: 8%";
}else{
  // alert("logo not found ")
}
navBar.style.setProperty("height","80px");
//  const hr =  document.getElementById("hr[0]");
//  hr.remove()
cartempthy.style.cssText = "display:none; width:96%;";
landingPage.style.setProperty("flex-direction","column");
left.style.cssText = "margin:-1% 0 0 0; width:100%;";
bigImg.style.cssText = "width:100%; border-radius:0px;"
smallImg .style.setProperty("display","none");
const right = document.getElementById("right") as HTMLElement;
right.style.cssText = "margin-top:4%; width:85%";
const price = document.getElementById("price") as HTMLElement;
price.style.cssText = "flex-direction:row; font-size:x-large;margin-bottom:9%; justify-content: space-between;";
const addCard = document.getElementById("add-card") as HTMLElement;
addCard.style.cssText = "flex-direction:column; height:100%";
const pricevalue = document.getElementById("price-value") as HTMLElement;
pricevalue.style.setProperty("margin-right","25%");
plusmynis.style.cssText = "width:100%; height:45px; margin: 0% 3%;"
addBtn.style.cssText = "width:96%;margin: 10% 3%; height:45px;";
const addbtnspan = document.querySelector(".add-btn span") as HTMLElement
addbtnspan.style.setProperty("font-size","18px");

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
       cartempthy.style.cssText = "display:block;margin: 1% 0% 0% 2%;width: 96%; height:30%;"
       menuOptions.style.setProperty("display","none")
     }
   }
 }
 deleteCartContent()
 // payment style of mobile less than or equal to 600 px 

}
function deleteCartContent() {
  const deleteIcon = document.getElementById('cart-empthy-id')
  if (deleteIcon) {
    // alert("deleteicon is not defined ")
  deleteIcon.onclick = function () {
    confirmDelete.style.cssText = "display:block; width:12%; margin-left:72%; margin-top:-8%; transition: all 3s; cursor:pointer;";
    deleteIcon.style.cssText = "transition:all 3s; display:none;";

    if (confirmDelete.hasAttribute("src")) {
      confirmDelete.onclick = function () {
        (cartContent as HTMLElement).style.cssText = "display: none;";
        (textEmpthy as HTMLElement).style.cssText = "display:block";
        profile.classList.remove("active");
        (basketCounter as HTMLElement).innerText = "0";
        (counter as HTMLElement).innerText = "0";
      }
    }
  }
} else {
  // return alert("delete icon is also not defined")
}
}

if (confirmDelete){
  if (confirmDelete.hasAttribute("src")) {
    confirmDelete.onclick = function (): void {
      // console.log(count);
      (cartContent as HTMLElement).style.cssText = "display: none;";
      textEmpthy.style.setProperty("display","block")
      profile.classList.remove("active");
      basketCounter.textContent = "0";
      counter.textContent = "0" ;
    }
  }
}




var c:number = 1;

if (next && previous && pre && nex && masterCard && counter && addBtn && counter){
next.onclick = (e) => {
  // bigImg.style.cssText = "width: 100%;border-radius: 0px;cursor: inherit;"
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
//  bigImg.style.cssText = "width:100%;"

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
  menuOptions.style.cssText ="position:fixed; width:60%;height:120%;background:white;margin:-8% 24% 0% 0%;"
  next.style.setProperty("display","none");
  previous.style.setProperty("display","none");
  menuOPtion.style.cssText = "display:flex; flex-direction:column;width:100%;margin:45% 0% 0% -5%;";
  closeMenu.style.cssText = "margin: -31% 7% 20% 0%;";
}

bigImg.onclick = () => {
  menuOptions.style.cssText = "display:none;"
}
baskett.onclick = () => {
  menuOptions.style.cssText = "display:none;"
}
closeMenu.onclick = () => {
  menuOptions.style.cssText = "margin-left:-160%;display:none;" ;
  next.style.setProperty("display","block");
  previous.style.setProperty("display","block");
}






// setInterval( mediaQuery_F(), 50, 'Parameter 1', 'Parameter 2');























if (width < 600 ) {
  forMobileStyle();  
} else if (width > 600) {
  forDesktopStyle()
  next.style.setProperty("display","none")
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






if (window.location.href.includes('http:localhost:3000/Women')) {
  pre.onclick = () => {
    countpopup--;
    if(countpopup === 0){
      popupImgBig.setAttribute("src","images/Women/pinckyNike1.jpg");
    }else if(countpopup=== 1){
      popupImgBig.setAttribute("src","images/Women/pinckyNike2.jpg");
    }else if(countpopup=== 2){
      popupImgBig.setAttribute("src","images/Women/pinckyNike3.jpg");
    }else if(countpopup=== 3){
      popupImgBig.setAttribute("src","images/Women/pinckyNike4.jpg");
    } 
    if(countpopup < 0) {
      return countpopup === 0;
     }
  }
} else if (window.location.href.includes('http:localhost:3000/Men' || 'http:localhost:3000/Home')) {
pre.onclick = () => {
  countpopup--;
  if(countpopup === 0){
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
} else {
//  alert('there is somethig wrong here or we are not on home men women link')
}


function paymentMethods(){
  const closePaymentMethods = document.getElementById('close-payment-methods')
  addBtn.onclick = () => {
    if (counter && counter.textContent&& closePaymentMethods) {
      let textContentOfCounter = counter.textContent;
      let valueOfcounter = parseInt(textContentOfCounter);
      // console.log(valuecounter);
    if(valueOfcounter>= 1 && width > 600) {
      closePaymentMethods.style.cssText = "margin: 0% 0% 0% 10%"
      parentPayments.style.setProperty("display","block");
      nav.style.cssText = "filter:blur(2px); pointer-events:none;"
      landingPage.style.cssText = "filter:blur(2px); pointer-events:none;";
      let csText: string = "position: relative;";;
      if (imgMastrCard) {
        imgMastrCard.style.cssText = csText;
        // console.log(csText);
      }
    } else if (valueOfcounter  >= 1 && width < 600){
      addBtn.addEventListener('click' , () => {
        const closePaymentMethods = document.getElementById('close-payment-methods') as HTMLSpanElement
        const parentPayments = document.querySelector(".parent-payments")as HTMLElement;
        parentPayments.style.cssText = "display: block;pointer-events: visible;position: fixed;";
        nav.style.cssText = "pointer-events:none; filter:blur(3px);"
        landingPage.style.cssText = "pointer-events:none; filter:blur(3px); display:block";
        const imgMastrCard = document.getElementById("master-card-img") as HTMLImageElement;
      imgMastrCard.style.cssText = "position: relative;"
        masterCard.style.cssText = "width:60%;";
         CashOnDelvery.style.setProperty("width","60%");
          // const parentPayments = document.getElementById('close-payment-methods')
         closePaymentMethods.style.setProperty("margin","15% 0%");
         paymentMethod.style.setProperty("margin","-100% 0% 13% 0%")
      });

    }

   (closePaymentMethods as HTMLSpanElement).onclick = () => {
   location.reload();
   }
  }
}
}
var checkout = document.getElementById('button-box-confirm') as HTMLButtonElement;
  checkout.addEventListener('click' , () => {
    // alert('im a checkout and im defined ')
    paymentMethods()
    window.location.href = "map"
  })
paymentMethods()
}

AAbout.addEventListener('click', function (e) {
    if (About_US_Page.classList.contains('activeA')) {
     About_US_Page.classList.remove('activeA')
     landingPage.style.cssFloat = "display:block;";
   }
    else{
         About_US_Page.classList.add('activeA'); 
         landingPage.style.cssFloat = "display:none;";
         About_US_Page.style.setProperty("display","block");
   }
   });

function handlewithCtegory () {
 let menArrowDown = document.getElementById('arrow-down-for-Men') as HTMLImageElement;
 let womenArrowDown = document.getElementById('arrow-down-for-Women') as HTMLImageElement;

 //////////////////////
 menArrowDown.onmouseenter = ()=> {
  men_category_list.style.cssText = 'display:block;margin-left: 47%; transition:all 2s;';

 }
 men_category_list.onmouseleave=() => {
  men_category_list.style.setProperty('display','none');
 }
landingPage.onmouseenter = () => {
  men_category_list.style.setProperty('display','none')
}
 womenArrowDown.onmouseenter = ()=> {
  men_category_list.style.cssText = 'display:block;margin-left: 52%; transition:all 2s;';
 }
 men_category_list.onmouseleave=() => {
  Women_category_list.style.setProperty('display','none');
 }
}
handlewithCtegory() 
