
var body = document.querySelector("body");
var nav = document.querySelector("#nav-id");
var profile = document.getElementById("profile-id");
var cartempthy = document.getElementById("cart-empthy-id");
var bigImg = document.getElementById("big-img-id");
var smallImg = document.getElementById("small-img-id");
var plusmynis = document.getElementById("plus-mynis-id");
var span0 = document.getElementById("counter");
var addBtn = document.getElementById("add-btn-id");
var baskett = document.getElementById("baskett");
var basket = document.getElementById("basket");
var ACollections = document.getElementById("Collections");
var AMen = document.getElementById("Men");
var AWomen = document.getElementById("Women");
var AAbout = document.getElementById("About");
var AContact = document.getElementById("Contact");
var spanC = document.getElementById("span-C");
var spanm = document.getElementById("span-m");
var spanw = document.getElementById("span-w");
var spana = document.getElementById("span-a");
var spanc = document.getElementById("span-c");
var small0ne = document.getElementById("small-1");
var smalltwo = document.getElementById("small-2");
var smallthree = document.getElementById("small-3");
var smallfour = document.getElementById("small-4");
var biggimg = document.getElementById("big-img-id");
var Value = document.getElementById("value");
var plus = document.getElementById("plus");
var counter = document.getElementById("counter");
var priceValue = document.getElementById("price-value");
var mynis = document.getElementById("mynis");
var confirmBox = document.querySelector(".price-confirm-box");
var priceStandart = document.getElementById("pri5ce-standart");
var counterCart = document.getElementById("counter-cart");
var equalPrice = document.getElementById("price-value-cart-empthy");
var deleteIcon = document.getElementById("delete-icon");
var confirmButton = document.getElementById("button-box-confirm");
var basketCounter = document.getElementById("basket-counter");
var textConfirm = document.getElementById("text-confirm");
var cartContent = document.getElementById("container-cart-content");
var textEmpthy = document.getElementById("text-empthy");
var confirmDelete = document.getElementById("confirm-delete");
var containerBar = document.getElementById("container-bar");
var logo = document.querySelector("logo");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var menuOptions = document.querySelector(".menu-options");
var closeMenu = document.querySelector(".menu-options span");
var cartempthyid = document.getElementById("cart-empthy-id");
var spanCartEmptyTxt = document.getElementById("span-cart-empty.txt");
var width = window.innerWidth || 0;
var menu = document.getElementById("menu");
var popup = document.querySelector(".popup");
var bigImgpopup = document.querySelector(".popup big-img");
var smallImgPopUp = document.getElementById("small-img-popup");
var closePopup = document.getElementById("close-popup");
var images = smallImgPopUp.getElementsByTagName("img");
var landingPage = document.getElementById("landing-page");
var popupImgBig = document.getElementById("popup-big-img");
var nex = document.getElementById("nex");
var pre = document.getElementById("pre");
var left = document.getElementById("left");
var paymentMethod = document.querySelector(".payment-Methods");
var masterCard = document.querySelector(".master-card");
var CashOnDelvery = document.querySelector(".CashOnDelevery");
var parentPayments = document.querySelector(".parent-payments");
var closePaymentMethods = document.getElementById("close-payment-methods");
var About_US_Page = document.querySelector(".About_US_Page");
function forDesktopStyle() {
    if (ACollections) {
        alert("hello im from aler a collection ");
        ACollections.onmouseenter = function () {
            spanC.style.setProperty("display", "block");
        };
    }
    AMen.onmouseenter = function () {
        spanm.style.setProperty("display", "block");
        spanC.style.setProperty("display", "none");
    };
    AMen.onmouseleave = function () {
        spanm.style.setProperty("display", "none");
        spanC.style.setProperty("display", "block");
    };
    AWomen.onmouseenter = function () {
        spanw.style.setProperty("display", "block");
        spanC.style.setProperty("display", "none");
    };
    AWomen.onmouseleave = function () {
        spanw.style.setProperty("display", "none");
        spanC.style.setProperty("display", "block");
    };
    AAbout.onmouseenter = function () {
        spana.style.setProperty("display", "block");
        spanC.style.setProperty("display", "none");
    };
    AAbout.onmouseleave = function () {
        spana.style.setProperty("display", "none");
        spanC.style.setProperty("display", "block");
    };
    AContact.onmouseenter = function () {
        spanc.style.setProperty("display", "block");
        spanC.style.setProperty("display", "none");
    };
    AContact.onmouseleave = function () {
        spanc.style.setProperty("display", "none");
        spanC.style.setProperty("display", "block");
    };
    small0ne.onmouseenter = function () {
        small0ne.classList.add("active");
        smalltwo.classList.remove("active");
        smallthree.classList.remove("active");
        smallfour.classList.remove("active");
        bigImg.setAttribute("src", "images/image-product-1.jpg");
    };
    small0ne.onmouseleave = function () {
        small0ne.classList.add("active");
        smalltwo.classList.remove("active");
        smallthree.classList.remove("active");
        smallfour.classList.remove("active");
        bigImg.setAttribute("src", "images/image-product-2.jpg");
    };
    smalltwo.onmouseenter = function () {
        smalltwo.classList.add("active");
        small0ne.classList.remove("active");
        smallthree.classList.remove("active");
        smallfour.classList.remove("active");
        bigImg.setAttribute("src", "images/image-product-2.jpg");
    };
    smallthree.onmouseenter = function () {
        smallthree.classList.add("active");
        smalltwo.classList.remove("active");
        smallfour.classList.remove("active");
        small0ne.classList.remove("active");
        bigImg.setAttribute("src", "images/image-product-3.jpg");
    };
    smallfour.onmouseenter = function () {
        smallfour.classList.add("active");
        smalltwo.classList.remove("active");
        smallthree.classList.remove("active");
        small0ne.classList.remove("active");
        bigImg.setAttribute("src", "images/image-product-4.jpg");
    };
}
forDesktopStyle();
var login = document.querySelector(".login");
login.addEventListener("click", function () {
    location.href = "login.html";
});
var navBar = document.querySelector('.nav-bar');
var btn_mode = document.querySelector('.btn_mode');
btn_mode.addEventListener('click', toggleDarkMode);
function toggleDarkMode() {
    var body = document.body;
    var navBar = document.querySelector('.nav-bar');
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        navBar === null || navBar === void 0 ? void 0 : navBar.classList.remove('dark-theme');
        btn_mode.style.setProperty('background', 'white');
        btn_mode.mode = 'light';
    }
    else {
        body.classList.add('dark-theme');
        navBar === null || navBar === void 0 ? void 0 : navBar.classList.add('dark-theme');
        btn_mode.style.setProperty('background', 'black');
        btn_mode.mode = 'dark';
    }
}
basket.onclick = function () {
    cartempthyid.style.setProperty("display", "block");
};
function prefixAll() {
    bigImg.style.setProperty("cursor", "inherit");
    previous.style.cssText = "float:left;margin-top:50%;width:7%;margin-left:5%;z-index:10;position:absolute;cursor:pointer;";
    next.style.cssText = "float:right;position:sticky;margin-top:-50%;width:7%;margin-right;cursor:pointer;";
}
prefixAll();
function ResetAllOption() {
    window.onload = function () {
        parentPayments.style.setProperty("display", "none");
        menuOptions.style.setProperty("display", "none");
        profile.classList.remove("active");
        small0ne.classList.add("active");
        smalltwo.classList.remove("active");
        smallthree.classList.remove("active");
        smallfour.classList.remove("active");
        bigImg.setAttribute("src", "images/image-product-1.jpg");
        spanC.style.setProperty("display", "block");
        equalPrice.textContent = priceValue.textContent;
        basketCounter.style.setProperty("display", "none");
        cartContent.style.setProperty("display", "none");
        textEmpthy.style.setProperty("display", "block");
        confirmDelete.style.setProperty("display", "none");
        cartempthy.style.setProperty("display", "none");
        popup.style.setProperty("display", "none");
    };
}
ResetAllOption();
function sendLocationToDB() {
    var _this = this;
    if ('geolocation' in navigator) {
        console.log("geolocation is avilable");
        navigator.geolocation.getCurrentPosition(function (position) {
            return __awaiter(_this, void 0, void 0, function () {
                var lat, lon, data, options;
                return __generator(this, function (_a) {
                    lat = position.coords.latitude;
                    lon = position.coords.longitude;
                    data = { lat: lat, lon: lon };
                    options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    };
                    fetch("/api", options)
                        .then(function (res) { return res.json(); })
                        .then(function (response) { return console.log('Form data received'); })["catch"](function (error) { return console.error('Error:', error); });
                    return [2];
                });
            });
        });
    }
    else {
        console.log("erour");
    }
}
profile.onmouseenter = function () {
    cartempthy.style.cssText = "display: block;";
    profile.classList.add("active");
    basket.style.setProperty("box-shadow", "0px 0px 23 01 var(--main-orange)");
    if (profile.classList.contains("active")) {
        profile.onclick = function () {
            cartempthy.style.cssText = "display:block;";
        };
    }
};
cartempthy.onmouseleave = function () {
    cartempthy.style.setProperty("display", "none");
};
function paymentSttleForMobile() {
    paymentMethod.style.cssText = "flex-direction: column;";
    CashOnDelvery.style.cssText = 'width:50%; ';
    parentPayments.style.cssText = "-120% 0%;";
    masterCard.style.setProperty("width", "60%");
}
function forMobileStyle() {
    paymentSttleForMobile();
    login.style.setProperty("display", "none");
    btn_mode.style.setProperty('display', 'none');
    landingPage.onclick = function () {
        cartempthyid.style.setProperty("display", "none");
    };
    basket.onclick = function () {
        cartempthyid.style.cssText = "display: block; width: 96%;margin: 1% 0% 0% 2%;height: 33%;";
        cartempthy.style.setProperty("display", "block");
        profile.classList.add("active");
    };
    menu.setAttribute("src", "images/icon-menu.svg");
    menu.style.cssText = "height:18%; margin:0 4%; cursor:pointer;";
    login.style.cssText = "margin-right:-6%;";
    var change = document.getElementById("change");
    change.style.cssText = "display:none;";
    basket.style.cssText = "margin:auto;";
    profile.style.cssText = "height:40%; cursor:pointer;margin: 0 6% 0 -21%;";
    logo.style.cssText = "margin-right: -35px";
    navBar.style.setProperty("height", "80px");
    cartempthy.style.cssText = "display:none; width:96%;";
    landingPage.style.setProperty("flex-direction", "column");
    left.style.cssText = "margin:-1% 0 0 0; width:100%;";
    bigImg.style.cssText = "width:100%; border-radius:0px;";
    smallImg.style.setProperty("display", "none");
    var right = document.getElementById("right");
    right.style.cssText = "margin-top:4%; width:85%";
    var price = document.getElementById("price");
    price.style.cssText = "flex-direction:row; font-size:x-large;margin-bottom:9%; justify-content: space-between;";
    var addCard = document.getElementById("add-card");
    addCard.style.cssText = "flex-direction:column; height:100%";
    var pricevalue = document.getElementById("price-value");
    pricevalue.style.setProperty("margin-right", "25%");
    plusmynis.style.cssText = "width:100%; height:45px";
    addBtn.style.cssText = "width:100%;margin: 5% 0% 8% 0%; height:45px;";
    var addbtnspan = document.querySelector(".add-btn span");
    addbtnspan.style.setProperty("font-size", "18px");
    menuOptions.onclick = function () {
        cartempthyid.style.setProperty("display", "none");
    };
    profile.onmouseenter = function () {
        cartempthyid.style.cssText = "display: block; width: 96%;margin: 1% 0% 0% 2%;height: 33%;";
        cartempthy.style.setProperty("display", "block");
        profile.classList.add("active");
        basket.style.setProperty("box-shadow", "0px 0px 23 01 var(--main-orange)");
        if (profile.classList.contains("active")) {
            profile.onclick = function () {
                cartempthy.style.cssText = "display:block;margin: 1% 0% 0% 2%;width: 96%;";
                menuOptions.style.setProperty("display", "none");
            };
        }
    };
    deleteCartContent();
}
function deleteCartContent() {
    deleteIcon.onclick = function () {
        confirmDelete.style.cssText = "display:block; width:12%; margin-left:72%; margin-top:-8%; transition: all 3s; cursor:pointer;";
        deleteIcon.style.cssText = "transition:all 3s; display:none;";
        if (confirmDelete.hasAttribute("src")) {
            confirmDelete.onclick = function () {
                cartContent.style.cssText = "display: none;";
                textEmpthy.style.cssText = "display:block";
                profile.classList.remove("active");
                basketCounter.innerText = "0";
                counter.innerText = "0";
            };
        }
    };
}
deleteCartContent();
function countproducts() {
    var count = 0;
    plus.onclick = function () {
        count++;
        counterCart.textContent = count.toString();
        textEmpthy.style.setProperty("display", "none");
        cartContent.style.setProperty("display", "block");
        basketCounter.style.setProperty("display", "block");
        profile.classList.add("active");
        var priceStandart = document.getElementById("price-standart");
        var priceconvert = +priceStandart.textContent;
        counter.textContent = count.toString();
        priceStandart.textContent = (count * 125).toString();
        basketCounter.textContent = count.toString();
        counterCart.textContent = count.toString();
        if (basketCounter) {
            var basketCounter_1 = document.getElementById("basket-counter");
            var basketCounterValue = +basketCounter_1.textContent;
            if (basketCounterValue < 0) {
                basketCounter_1.textContent = "0";
                priceStandart.textContent = "0";
            }
        }
        if (count <= 0) {
            counter.textContent = "0";
            priceStandart.textContent = "125";
            basketCounter.textContent = "0";
            profile.classList.remove("active");
        }
        else if (count > 0) {
            profile.classList.add("active");
        }
        if (priceStandart.textContent === '1250') {
            var confirme = confirm("hello are you a big seller mc");
            if (confirme === true) {
            }
        }
    };
    mynis.onclick = function () {
        count--;
        counter.textContent = count.toString();
        basketCounter.textContent = count.toString();
        priceStandart.textContent = (count * 125).toString();
        priceValue.textContent = "125";
        if (count <= 0) {
            counter.textContent = "0";
            basketCounter.textContent = "0";
            priceStandart.textContent = "125";
            cartContent.style.setProperty("display", "none");
            textEmpthy.style.setProperty("display", "block");
            textEmpthy.style.setProperty("display", "block");
            counter.textContent = "0";
        }
    };
    if (confirmDelete.hasAttribute("src")) {
        confirmDelete.onclick = function () {
            console.log(count);
            cartContent.style.cssText = "display: none;";
            textEmpthy.style.setProperty("display", "block");
            profile.classList.remove("active");
            basketCounter.textContent = "0";
            counter.textContent = "0";
        };
    }
}
"";
var c = 1;
next.onclick = function (e) {
    bigImg.style.cssText = "width:100%;width: 100%;border-radius: 0px;cursor: inherit;";
    left.style.cssText = "align-items:normal; width:100%; margin:auto";
    c++;
    if (c === 1) {
        bigImg.setAttribute("src", "images/image-product-1.jpg");
    }
    if (c === 2) {
        bigImg.setAttribute("src", "images/image-product-2.jpg");
    }
    else if (c === 3) {
        bigImg.setAttribute("src", "images/image-product-3.jpg");
    }
    else if (c === 4) {
        bigImg.setAttribute("src", "images/image-product-4.jpg");
    }
    else if (c >= 5) {
        bigImg.setAttribute("src", "images/image-product-1.jpg");
        var cm = 1;
        return c = +cm;
    }
};
previous.onclick = function (e) {
    c--;
    bigImg.style.cssText = "width:100%;";
    if (c === 1) {
        bigImg.setAttribute("src", "images/image-product-1.jpg");
    }
    else if (c === 2) {
        bigImg.setAttribute("src", "images/image-product-2.jpg");
    }
    else if (c === 3) {
        bigImg.setAttribute("src", "images/image-product-3.jpg");
    }
    else if (c === 4) {
        bigImg.setAttribute("src", "images/image-product-4.jpg");
    }
    else if (c <= 0) {
        bigImg.setAttribute("src", "images/image-product-1.jpg");
        return c = 1;
    }
};
next.onmouseenter = function () {
    next.style.setProperty('filter', 'drop-shadow(red 16px 16px 20px) invert(75%)');
    next.style.setProperty('box-shadow', '74px 3px green, -1em 0 1.4em black');
};
next.onmouseleave = function () {
    next.style.setProperty('filter', 'none');
    next.style.setProperty('box-shadow', 'none');
};
previous.onmouseenter = function () {
    previous.style.setProperty('filter', 'drop-shadow(red 16px 16px 20px) invert(75%)');
    previous.style.setProperty('box-shadow', '0px 0px white, 1em 0 1.9em');
};
previous.onmouseleave = function () {
    previous.style.setProperty('filter', 'none');
    previous.style.setProperty('box-shadow', 'none');
};
menu.onclick = function () {
    menuOptions.style.cssText = "position:fixed; width:60%;height:120%;background:white;margin: -22% 0% 0% -40%;";
    next.style.setProperty("display", "none");
    previous.style.setProperty("display", "none");
    document.querySelector(".menu-options ul").style.cssText = "display:flex; flex-direction:column;width:100%;margin:45% 0% 0% -5%;";
    closeMenu.style.cssText = "margin: -31% 7% 20% 0%;";
};
bigImg.onclick = function () {
    menuOptions.style.cssText = "display:none";
};
baskett.onclick = function () {
    menuOptions.style.cssText = "display:none";
};
closeMenu.onclick = function () {
    menuOptions.style.cssText = "margin-left:-160%;display:none;";
    next.style.setProperty("display", "block");
    previous.style.setProperty("display", "block");
};
if (width < 600) {
    countproducts();
    forMobileStyle();
}
else if (width > 600) {
    forDesktopStyle();
    countproducts();
    next.style.setProperty("display", "none");
    previous.style.setProperty("display", "none");
    bigImg.style.setProperty("margin", "0% 0% 0% 25%");
    bigImg.onclick = function () {
        popup.style.setProperty("display", "block");
        nav.style.setProperty("filter", "blur(2px)");
        landingPage.style.setProperty("filter", "blur(2px)");
    };
    closePopup.onclick = function () {
        popup.style.setProperty("display", "none");
        nav.style.setProperty("filter", "none");
        landingPage.style.setProperty("filter", "none");
    };
    images[0].onmouseenter = function () {
        popupImgBig.setAttribute("src", "images/image-product-1.jpg");
        images[0].classList.add("active");
        images[1].classList.remove("active");
        images[2].classList.remove("active");
        images[3].classList.remove("active");
    };
    images[1].onmouseenter = function () {
        popupImgBig.setAttribute("src", "images/image-product-2.jpg");
        images[0].classList.remove("active");
        images[1].classList.add("active");
        images[2].classList.remove("active");
        images[3].classList.remove("active");
    };
    images[2].onmouseenter = function () {
        popupImgBig.setAttribute("src", "images/image-product-3.jpg");
        images[0].classList.remove("active");
        images[1].classList.remove("active");
        images[2].classList.add("active");
        images[3].classList.remove("active");
    };
    images[3].onmouseenter = function () {
        popupImgBig.setAttribute("src", "images/image-product-4.jpg");
        images[0].classList.remove("active");
        images[1].classList.remove("active");
        images[2].classList.remove("active");
        images[3].classList.add("active");
    };
    var countpopup = 0;
    nex.onclick = function () {
        countpopup++;
        if (countpopup === 0) {
            popupImgBig.setAttribute("src", "images/image-product-1.jpg");
        }
        else if (countpopup === 1) {
            popupImgBig.setAttribute("src", "images/image-product-2.jpg");
        }
        else if (countpopup === 2) {
            popupImgBig.setAttribute("src", "images/image-product-3.jpg");
        }
        else if (countpopup === 3) {
            popupImgBig.setAttribute("src", "images/image-product-4.jpg");
        }
        if (countpopup > 3) {
            return countpopup === 3;
        }
        if (countpopup < 0) {
            return countpopup === 0;
        }
    };
}
pre.onclick = function () {
    countpopup--;
    if (countpopup === 0) {
        popupImgBig.setAttribute("src", "images/image-product-1.jpg");
    }
    else if (countpopup === 1) {
        popupImgBig.setAttribute("src", "images/image-product-2.jpg");
    }
    else if (countpopup === 2) {
        popupImgBig.setAttribute("src", "images/image-product-3.jpg");
    }
    else if (countpopup === 3) {
        popupImgBig.setAttribute("src", "images/image-product-4.jpg");
    }
    if (countpopup < 0) {
        return countpopup === 0;
    }
};
masterCard.onclick = function () {
};
CashOnDelvery.onclick = function () {
    sendLocationToDB();
};
function paymentMethods() {
    addBtn.onclick = function () {
        if (counter.textContent >= 1 && width > 600) {
            closePaymentMethods.style.cssText = "margin: 0% 0% 0% 10%";
            parentPayments.style.setProperty("display", "block");
            nav.style.cssText = "filter:blur(2px); pointer-events:none;";
            landingPage.style.cssText = "filter:blur(2px); pointer-events:none;";
            document.querySelector(".master-card img").style.cssText = "position: relative;";
        }
        else if (counter.textContent >= 1 && width < 600) {
            addBtn.onclick = function () {
                parentPayments.style.cssText = "display: block;pointer-events: visible;position: fixed;";
                nav.style.cssText = "pointer-events:none; filter:blur(3px);";
                landingPage.style.cssText = "pointer-events:none; filter:blur(3px); display:block";
                document.querySelector(".master-card img").style.cssText = "position: relative;";
                document.querySelector(".master-card").style.cssText = "width:60%;";
                CashOnDelvery.style.setProperty("width", "60%");
                closePaymentMethods.style.setProperty("margin", "15% 0%");
                paymentMethod.style.setProperty("margin", "-130% 0% 0% 0%");
            };
        }
        closePaymentMethods.onclick = function () {
            location.reload();
        };
    };
}
paymentMethods();
AAbout.addEventListener('click', function (e) {
    if (About_US_Page.classList.contains('activeA')) {
        About_US_Page.classList.remove('activeA');
        document.querySelector('landing-page').style.cssFloat = "display:block;";
    }
    else {
        About_US_Page.classList.add('activeA');
        document.querySelector('landing-page').style.cssFloat = "display:none;";
        About_US_Page.style.setProperty("display", "block");
    }
});
