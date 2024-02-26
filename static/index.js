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
    }
     "spritze": {
        "id": 7,
        "name": "Spritze 1ml Kanüle",
        "description": "Eine hochpräzise Spritze für Sie und Ihn.",
        "price": 12.95,
        "sale": false,
        "priceNoSale": 12.95,
        "imageSrc": "./static/spritze.png",
    },
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
    let firstHighestSale = 0;
    let secondHighestSale = 0;
    let thirdHighestSale = 0;
    let firstSaleDiv = null;
    let secondSaleDiv = null;
    let thirdSaleDiv = null;
    let firstExpensive = 0;
    let secondExpensive = 0;
    let firstExpensiveDiv = null;
    let secondExpensiveDiv = null;
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
            
            if (product.price > firstExpensive) {
                if (firstExpensiveDiv != null && secondExpensiveDiv == null) {
                    secondExpensive = firstExpensive;
                    secondExpensiveDiv = firstExpensiveDiv;
                }
                firstExpensive = product.price;
                firstExpensiveDiv = div.cloneNode(true);
            } else if (product.price > secondExpensive) {
                secondExpensive = product.price;
                secondExpensiveDiv = div.cloneNode(true);
            }

            // Add sales > 50% (max 3) to landing page
            let salePercent = product.price / product.priceNoSale;
            if (salePercent > firstHighestSale) {
                if (firstSaleDiv != null) {
                    if (secondSaleDiv == null) {
                        secondSaleDiv = firstSaleDiv;
                        secondHighestSale = firstHighestSale;
                    } else if (thirdSaleDiv == null) {
                        thirdSaleDiv = firstSaleDiv;
                        thirdHighestSale = firstHighestSale;
                    }
                }
                firstHighestSale = salePercent;
                firstSaleDiv = div.cloneNode(true);
            } else if (salePercent > secondHighestSale) {
                if (secondSaleDiv != null) {
                    if (thirdSaleDiv == null) {
                        thirdSaleDiv = secondSaleDiv;
                        thirdHighestSale = secondHighestSale;
                    }
                }
                secondHighestSale = salePercent;
                secondSaleDiv = div.cloneNode(true);
            } else if (salePercent > thirdHighestSale) {
                thirdHighestSale = salePercent;
                thirdSaleDiv = div.cloneNode(true);
            }
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

            if (product.price > firstExpensive) {
                if (firstExpensiveDiv != null && secondExpensiveDiv == null) {
                    secondExpensive = firstExpensive;
                    secondExpensiveDiv = firstExpensiveDiv;
                }
                firstExpensive = product.price;
                firstExpensiveDiv = div.cloneNode(true);
            } else if (product.price > secondExpensive) {
                secondExpensive = product.price;
                secondExpensiveDiv = div.cloneNode(true);
            }
        }
    }

    if (firstSaleDiv != null) document.querySelector(".product-sales-wrapper").appendChild(firstSaleDiv);
    if (secondSaleDiv != null) document.querySelector(".product-sales-wrapper").appendChild(secondSaleDiv);
    if (thirdSaleDiv != null) document.querySelector(".product-sales-wrapper").appendChild(thirdSaleDiv);


    if (firstExpensiveDiv != null) document.querySelector(".product-famous-wrapper").appendChild(firstExpensiveDiv); // Hier werden die teuersten Produkte zu Beliebteste Produkte hinzugefügt; Es gibt keinen "Tracker" wie oft ein Produkt gekauft wird
    if (secondExpensiveDiv != null) document.querySelector(".product-famous-wrapper").appendChild(secondExpensiveDiv);

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

        // Lightmode

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
        document.querySelector(".wrap-header").style.backgroundColor = "#c7c7c7";
        document.querySelector(".header-logo").src = "./static/STMX-SHOP-WHITE-NOBG.png";
        document.querySelector(".header-wrapper").style.color="#464646";

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

        // Darkmode

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
        document.querySelector(".wrap-header").style.backgroundColor = "#333";
        document.querySelector(".header-logo").src = "./static/STMX-SHOP-DARK-NOBG.png";
        document.querySelector(".header-wrapper").style.color="#fff";
    }
}

document.querySelectorAll("#lightmode").forEach((e) => {e.addEventListener("click", (e) => {setCookie("stmx_mode", "0", 365); refreshTheme();})});
document.querySelectorAll("#darkmode").forEach((e) => {e.addEventListener("click", (e) => {setCookie("stmx_mode", "1", 365); refreshTheme();})});

function setCookie(cname, cvalue, exdays) {
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
