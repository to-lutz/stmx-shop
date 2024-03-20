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
    },
    "ian": {
        "id": 16,
        "name": "I-ehnn",
        "description": "Rund, Mützenheini, pip pop, 'koi ahnung', durchtrainierte Unterarme, massiv beharrt",
        "price": 3500.00,
        "sale": false,
        "priceNoSale": 3500.00,
        "imageSrc": "./static/ian.png",
    },
    "filip": {
        "id": 17,
        "name": "Viliph",
        "description": "Herausragend, im Falle einer benötigten, kleinen, spitzen Utilisation",
        "price": 2.00,
        "sale": false,
        "priceNoSale": 2.00,
        "imageSrc": "./static/filip.png",
    },
    "ben": {
        "id": 18,
        "name": "Ben Romer",
        "description": "Ihre neue Premium Chaya",
        "price": 5.99,
        "sale": true,
        "priceNoSale": 2.99,
        "imageSrc": "./static/ben.png",
    },
    "waltundmike": {
        "id": 19,
        "name": "Walter #FFFFFF und Mike Mayer",
        "description": "Wenns beim Kochen mal schnell gehen muss",
        "price": 0.48,
        "sale": false,
        "priceNoSale": 0.48,
        "imageSrc": "./static/waltundmike.png",
    }
};  

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

function isSmallPage() {
    return document.body.clientWidth <= 768;
}

function updateProductPage() {
    for (productitem in products) {
        let product = products[productitem];
        let div = document.createElement("div");
        div.className = "product";
        div.id = product.id;
        if (product.sale) {
            div.innerHTML = `
            <div class="product-title-wrapper">
                <h3 class="product-title">` + product.name +`</h3>
                <img class="product-image" src="` + product.imageSrc + `"/>
            </div>
            <p class="product-description">` + product.description + `</p>
            <div class="product-footer">
                <div class="product-price">
                    <p class="price-text">Preis:&nbsp;<p class="product-price product-price-val product-price-colour-red">` + product.price + `€</p></p>
                </div>
                <div class="product-price-sale">
                (<p class="product-price-sale product-price-sale-val">` + product.priceNoSale + `€</p>)
                </div>
            </div>
            <button class="product-addtocart-btn" id="addtocart-` + product.id + `">Zum Warenkorb hinzufügen</button>
            `.trim();
        } else {
            div.innerHTML = `
            <div class="product-title-wrapper">
                <h3 class="product-title">` + product.name +`</h3>
                <img class="product-image" src="` + product.imageSrc + `"/>
            </div>
            <p class="product-description">` + product.description + `</p>
            <div class="product-footer">
                <div class="product-price">
                    <p class="price-text">Preis:&nbsp;<p class="product-price product-price-val">` + product.price + `€</p></p>
                </div>
            </div>
            <button class="product-addtocart-btn" id="addtocart-` + product.id + `">Zum Warenkorb hinzufügen</button>
            `.trim();
        }
        document.querySelector(".product-wrapper").appendChild(div);
    }
    document.querySelectorAll(".product-addtocart-btn").forEach((e) => {
        e.addEventListener("click", (e) => {
            setCookie("stmx_cart_ids", getCookie("stmx_cart_ids") + String(e.target.id).replace("addtocart-", "") + ":");
            document.querySelector(".addtocart-modal-wrapper").style.display = "flex";
            let pName = "?";
            for (productitem in products) {
                let product = products[productitem];
                if (product.id == Number(String(e.target.id).replace("addtocart-", ""))) pName = product.name;
            }
            document.querySelector("#addtocart-modal-item").innerHTML = pName;
        });
    });
    document.querySelector(".addtocart-modal-continueshop-btn").addEventListener("click", (e) => document.querySelector(".addtocart-modal-wrapper").style.display = "none");
    document.querySelector(".addtocart-modal-cart-btn").addEventListener("click", (e) => {
        document.querySelector(".addtocart-modal-wrapper").style.display = "none";
        window.location.href = "cart.html";
    });
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
        document.querySelectorAll(".product").forEach((e) => e.style.backgroundColor="#fff");
        document.querySelectorAll(".product-title").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".product-description").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".price-text").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".product-price-val").forEach((e) => e.style.color="#000");
        document.querySelectorAll(".product-price-sale").forEach((e) => e.style.color="#000");
        document.querySelector(".addtocart-modal").style.backgroundColor="#fff";
        document.querySelectorAll(".addtocart-modal-header").forEach((e) => e.style.color = "#000");
        document.querySelector("#addtocart-modal-item").style.color = "#000";

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
        document.querySelectorAll(".product").forEach((e) => e.style.backgroundColor="#444");
        document.querySelectorAll(".product-title").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".product-description").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".price-text").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".product-price-val").forEach((e) => e.style.color="#fff");
        document.querySelectorAll(".product-price-sale").forEach((e) => e.style.color="#fff");
        document.querySelector(".addtocart-modal").style.backgroundColor="#444";
        document.querySelectorAll(".addtocart-modal-header").forEach((e) => e.style.color = "#fff");
        document.querySelector("#addtocart-modal-item").style.color = "#fff";

    }
}

document.querySelectorAll("#lightmode").forEach((e) => {e.addEventListener("click", (e) => {setCookie("stmx_mode", "0", 365); refreshTheme();})});
document.querySelectorAll("#darkmode").forEach((e) => {e.addEventListener("click", (e) => {setCookie("stmx_mode", "1", 365); refreshTheme();})});

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

function addZeroes(num) {
    num = String(num);
    const dec = num.split('.')[1]
    const len = dec && dec.length > 2 ? dec.length : 2
    return Number(num).toFixed(len)
}

updateProductPage();
refreshTheme();

// Cookie Modal Logic

function cookiesEnabled() {
    return getCookie("stmx_cookie_preferences") == "all";
}
