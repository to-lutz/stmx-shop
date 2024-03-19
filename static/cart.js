const products = {
    "banane": {
        "id": 2,
        "name": "Banane",
        "description": "Die beste Banane, die du jemals essen wirst! So knusprig wie noch nie!",
        "price": 2.99,
        "sale": false,
        "priceNoSale": 2.99,
        "imageSrc": "./static/banana.png",
    },
    "3090": {
        "id": 3,
        "name": "ASUS GeForce RTX™ 3090 ROG Strix Gaming OC White 24GB",
        "description": "Eine GPU von ASUS in weiß die von Marcel Leven sehr begehrt wird, sie liefert die optimale Leistung für ihren PC!",
        "price": 1399.99,
        "sale": true,
        "priceNoSale": 1449.99,
        "imageSrc": "./static/3090.png",
    },
    "felge": {
        "id": 4,
        "name": "BBS Super RS silber",
        "description": "Felgen aus dem Hause BBS in Silber. Diese verleihen ihrem Fahrbarenuntersatz auf 4 Rädern den letzten Schliff!",
        "price": 1545.50,
        "sale": false,
        "priceNoSale": 1545.50,
        "imageSrc": "./static/Felge.png",
    },  
    "salsa": {
        "id": 5,
        "name": "Tapatío Salsa Picante Hot Sauce 148ml",
        "description": "Eine von Mexicos beliebtesten Soßen. <SLASA Y PICANTE>",
        "price": 4.95,
        "sale": false,
        "priceNoSale": 4.95,
        "imageSrc": "./static/SALSA.png",
    },
    "hotdog": {
        "id": 6,
        "name": "IKEA HotDog",
        "description": "Jeder kennt ihn jeder liebt ihn den klassischen HotDog von IKEA zu Preis von 1.00€",
        "price": 1.00,
        "sale": false,
        "priceNoSale": 1.00,
        "imageSrc": "./static/HotDog.png",
    },
    "BMW": {
        "id": 8,
        "name": "BMW M3 E30 Red Limited Edition",
        "description": "Das Ideale auto für jeden Tuningfan!",
        "price": 30000,
        "sale": false,
        "priceNoSale": 30000,
        "imageSrc": "./static/BMW_New.png",
    },
    "Turbo": {
        "id": 9,
        "name": "EJ 20/25 Turbolader",
        "description": "Zwei hochwertige EJ20 oder EJ25 Turbolader für die beste Beschleunigung.",
        "price": 3000,
        "sale": false,
        "priceNoSale": 3000.,
        "imageSrc": "./static/turbo_New.png",
    },
    "spritze": {
        "id": 7,
        "name": "Spritze 1ml Kanüle",
        "description": "Eine hochpräzise Spritze für Sie und Ihn.",
        "price": 12.95,
        "sale": false,
        "priceNoSale": 12.95,
        "imageSrc": "./static/spritze.png",
    },
    "mike": {
        "id": 10,
        "name": "Mike",
        "description": "Hier sehen sie unseren sehr geschätzten Sponsor \"Mike\".Seine Dienstleistungen können sie für kleines Geld erwerben!",
        "price": 17.95,
        "sale": true,
        "priceNoSale": 20000,
        "imageSrc": "./static/mike.png",
    },
    "komma": {
        "id": 11,
        "name": "Komma fuer Maxi",
        "description": "Sehr wichtig!!",
        "price": 0,
        "sale": false,
        "priceNoSale": 0,
        "imageSrc": "./static/komma.png",
    },
    "jojo": {
        "id": 12,
        "name": "Johannes (aka. Markus Ruehl v2)",
        "description": "Der einzig Wahre, der breiter ist als Markus Ruehl. Der Türsteher deines Vertrauens!",
        "price": 3.19,
        "sale": false,
        "priceNoSale": 3.19,
        "imageSrc": "./static/jojo.png",
    },
    "xavier": {
        "id": 13,
        "name": "Xa4",
        "description": "Dein neuer Lieblingsginger, schneller verbrannt als dein Toast!",
        "price": 69.69,
        "sale": false,
        "priceNoSale": 69.69,
        "imageSrc": "./static/xavier.png",
    },
    "marslsese": {
        "id": 14,
        "name": "Marcel Leven und Sebastian Müller",
        "description": "Perfekt zum Spielen für Wer hat Angst vorm Schwarzen Mann.",
        "price": 0.01,
        "sale": false,
        "priceNoSale": 0.01,
        "imageSrc": "./static/marslundsese.png",
    },
    "smokingmike": {
        "id": 15,
        "name": "Smoking Mike",
        "description": "(Aus rechtlichen Gründen stimmte der abzubildende Homo Sapiens dieser Bildabänderung zu.)",
        "price": 10.99,
        "sale": true,
        "priceNoSale": 11.99,
        "imageSrc": "./static/smokingmike.png",
    }
};  

function isSmallPage() {
    return document.body.clientWidth <= 768;
}

lastWindowWidth = document.body.clientWidth;
window.addEventListener("resize", (e) => {
    refreshTheme();
    if (lastWindowWidth <= 768 && document.body.clientWidth > 769) {
        document.querySelector(".responsive-nav").style.display = "none";
        ham.classList.remove("fa-x");
        ham.classList.add("fa-bars");
    }
});

function refreshTheme() {
    // Light / Darkmode
    if (getCookie("stmx_mode") == "1") { // Lightmode
        for (elem of document.querySelectorAll("#darkmode")) {
            elem.style.display = "none";
            elem.style.cursor = "default";
        }
        for (elem of document.querySelectorAll("#lightmode")) {
            elem.style.display = "inline-block";
            elem.style.cursor = "pointer";
        }
        isSP = isSmallPage();
        if (isSP) {
            document.querySelectorAll(".bignav-modeswitch").forEach((e) => e.style.display="none");
        } else {
            document.querySelectorAll(".respnav-modeswitch").forEach((e) => e.style.display="none");
        }

        document.querySelectorAll(".navbar-logo").forEach((e) => {e.src = "./static/STMX-SHOP-WHITE-NOBG.png"});
        document.querySelector(".navbar").style.backgroundColor="#fff";
        document.querySelector(".responsive-nav").style.backgroundColor="#fff";
        document.querySelector(".navbar").querySelectorAll("a").forEach((e) => e.style.color="#000");
        document.querySelector(".responsive-nav").querySelectorAll("a").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".nav-hamburger").forEach((e) => e.style.color="#000");

        document.body.style.backgroundColor="#e9e9e9";
        document.querySelector(".header").style.color="#000";
        document.querySelector(".cart-items").style.backgroundColor="#fff";
        document.querySelectorAll(".cart-title-text").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".cart-description").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".price-text").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".price-text-sale").forEach((e) => e.style.color="#ff3939");
        document.querySelectorAll(".cart-checkout-modal").forEach((e) => e.style.backgroundColor="#fff");
        document.querySelectorAll(".cart-subtotal-text").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".cart-checkout-text").forEach((e) => e.style.color="#000");
    } else if (getCookie("stmx_mode") == ""){ // No mode set, default: dark mode
        setCookie("stmx_mode", "0", 365);
        refreshTheme();
    } else { // Darkmode
        for (elem of document.querySelectorAll("#lightmode")) {
            elem.style.display = "none";
            elem.style.cursor = "default";
        }
        for (elem of document.querySelectorAll("#darkmode")) {
            elem.style.display = "inline-block";
            elem.style.cursor = "pointer";
        }
        isSP = isSmallPage();
        if (isSP) {
            document.querySelectorAll(".bignav-modeswitch").forEach((e) => e.style.display="none");
        } else {
            document.querySelectorAll(".respnav-modeswitch").forEach((e) => e.style.display="none");
        }

        document.querySelectorAll(".navbar-logo").forEach((e) => {e.src = "./static/STMX-SHOP-DARK-NOBG.png"});
        document.querySelector(".navbar").style.backgroundColor="#444444";
        document.querySelector(".responsive-nav").style.backgroundColor="#444444";
        document.querySelector(".navbar").querySelectorAll("a").forEach((e) => e.style.color="#fff");
        document.querySelector(".responsive-nav").querySelectorAll("a").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".nav-hamburger").forEach((e) => e.style.color="#fff");

        document.body.style.backgroundColor="#818181";
        document.querySelector(".header").style.color="#fff";
        document.querySelector(".cart-items").style.backgroundColor="#444";
        document.querySelectorAll(".cart-title-text").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".cart-description").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".price-text").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".price-text-sale").forEach((e) => e.style.color="#ff3939");
        document.querySelectorAll(".cart-checkout-modal").forEach((e) => e.style.backgroundColor="#444");
        document.querySelectorAll(".cart-subtotal-text").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".cart-checkout-text").forEach((e) => e.style.color="#fff");
    }
}

document.querySelectorAll("#lightmode").forEach((e) => {e.addEventListener("click", (e) => {setCookie("stmx_mode", "0", 365); refreshTheme();})});
document.querySelectorAll("#darkmode").forEach((e) => {e.addEventListener("click", (e) => {setCookie("stmx_mode", "1", 365); refreshTheme();})});

const ham = document.querySelector('.nav-hamburger');
ham.addEventListener("click", (e) => {
    if (ham.classList.contains("fa-x")){
        document.querySelector(".responsive-nav").style.display="none";
        ham.classList.remove("fa-x");
        ham.classList.add("fa-bars");
    } else {
        document.querySelector(".responsive-nav").style.display="flex";
        ham.classList.remove("fa-bars");
        ham.classList.add("fa-x");
    }
});

function displayProducts() {
    for (id of getCookie("stmx_cart_ids").split(":")) {
        let product = null;
        for (productIt in products) {
            if (products[productIt].id == id) product = products[productIt]
        }
        if (product == null) continue;
        let div = document.createElement("div");
        div.className = "cart-item";
        div.id = product.id;
        if (product.sale) {
            div.innerHTML = `
            <div class="cart-title">
                <h5 class="cart-title-text">` + product.name + `</h5>
                <img class="product-image" src="` + product.imageSrc + `"></img>
            </div>
            <p class="cart-description">` + product.description + `<p>
            <div class="cart-footer">
                <div>
                    <p class="price-text">Menge:&nbsp;</p>
                    <input id="amount-` + product.id + `" class="cart-amount" type="number" value="1" min="0" max="99" onchange="updatePrice(` + product.price + `, ` + product.id + `, true, `+ product.priceNoSale + `)"/>
                </div>
                <div class="price-div">
                    <p class="price-text">Preis:&nbsp;<strong><p class="price-text price-text-sale price-text-value" id="price-` + product.id + `">` + product.price + `€</p>&nbsp;<p class="price-text price-text-noSale" id="priceWithoutSale-` + product.id + `">(` + product.priceNoSale + `€)</p></strong></p>
                </div>
            </div>`.trim();
        } else {
            div.innerHTML = `
            <div class="cart-title">
                <h5 class="cart-title-text">` + product.name + `</h5>
                <img class="product-image" src="` + product.imageSrc + `"></img>
            </div>
            <p class="cart-description">` + product.description + `<p>
            <div class="cart-footer">
                <div>
                    <p class="price-text">Menge:&nbsp;</p>
                    <input id="amount-` + product.id + `" class="cart-amount" type="number" value="1" min="0" max="99" onchange="updatePrice(` + product.price + `, ` + product.id + `, false, 0)"/>
                </div>
                <div class="price-div">
                    <p class="price-text">Preis:&nbsp;<strong><p class="price-text price-text-value" id="price-` + product.id + `">` + product.price + `€</p></strong></p>
                </div>
            </div>`.trim();
        }
        document.getElementById("cart-items-wrapper").appendChild(div);
    }
    if (document.querySelector(".cart-items").childNodes.length == 0) {
        document.querySelector(".cart-modal").style.display = "block";
        document.querySelector(".cart-checkout-modal").style.display = "none";
        document.querySelector(".cart-items").style.display = "none";
        // Dummy Item
        // let div = document.createElement("div");
        // div.className = "cart-item";
        // div.id = 0;
        // div.innerHTML = `
        //     <div class="cart-title">
        //         <h5 class="cart-title-text">Banane</h5>
        //         <img class="product-image" src="./static/banana.jfif"></img>
        //     </div>
        //     <p class="cart-description">supi knusprige banane mmmmmm lecker boahh<p>
        //     <div class="cart-footer">
        //         <div>
        //             <p class="price-text">Menge:&nbsp;</p>
        //             <input id="amount-0" class="cart-amount" type="number" value="1" min="0" max="99" onchange="updatePrice(899.99, 0, false, 899.99)"/>
        //         </div>
        //         <div class="price-div">
        //             <p class="price-text">Preis:&nbsp;<strong><p class="price-text price-text-value" id="price-0">899.99€</p></strong></p>
        //         </div>
        //     </div>`.trim();
        // document.getElementById("cart-items-wrapper").appendChild(div);
    }
}

function updatePrice(price, elemID, isSale, priceNoSale) {
    let amount = document.getElementById("amount-" + elemID).value;
    if (amount <= 0) {
        document.getElementById(elemID).remove();
        setCookie("stmx_cart_ids", getCookie("stmx_cart_ids").replace(elemID, ""), 90);
        refreshTotalPrice();
        if (getCookie("stmx_cart_ids").replaceAll(":", "") == "") {
            document.querySelector(".cart-items").style.display = "none";
        }
        return;
    }
    if (isSale) {
        document.getElementById("priceWithoutSale-" + elemID).innerHTML = "<strong>(" + addZeroes(Math.round(priceNoSale*amount*100)/100) + "€)</strong>";
    }
    document.getElementById("price-" + elemID).innerHTML = "<strong>" + addZeroes(Math.round(price*amount*100)/100) + "€</strong>";
    refreshTotalPrice();
}

function addZeroes(num) {
    num = String(num);
    const dec = num.split('.')[1]
    const len = dec && dec.length > 2 ? dec.length : 2
    return Number(num).toFixed(len)
}

function refreshTotalPrice() {
    let subtotal = document.querySelector("#cart-subtotal");
    let subtotalVal = 0;
    let delivery = document.querySelector("#cart-delivery-cost");
    let deliveryVal = 0;
    let total = document.querySelector("#cart-total");
    let totalVal = 0;
    for (let child of document.querySelector(".cart-items").childNodes) {
        for (productItem in products) {
            if (products[productItem].id == child.id) {
                subtotalVal+=Number(products[productItem].price)*document.querySelector("#amount-" + child.id).value;
                deliveryVal+=0.99;
            }
        }
    }
    subtotalVal = Math.round(subtotalVal*100)/100;
    totalVal = Math.round((subtotalVal + deliveryVal)*100)/100;

    subtotal.innerHTML = addZeroes(subtotalVal);
    delivery.innerHTML = addZeroes(deliveryVal);
    total.innerHTML = addZeroes(totalVal);
    if (document.querySelector(".cart-items").childNodes.length == 0) {
        document.querySelector(".cart-modal").style.display = "block";
        document.querySelector(".cart-checkout-modal").style.display = "none";
    }
}

function setCookie(cname, cvalue, exdays) {
    if (!cookiesEnabled) return;
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

displayProducts();
refreshTotalPrice();
refreshTheme();

// Cookie Modal Logic

function cookiesEnabled() {
    return getCookie("stmx_cookie_preferences") == "all";
}
