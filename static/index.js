const products = {
    "test": {
        "id": 1,
        "name": "Testprodukt",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
        "price": 0.99,
        "sale": true,
        "priceNoSale": 1.49,
        "imageSrc": "./static/productplaceholder.png",
    },
    "banane": {
        "id": 2,
        "name": "Banane",
        "description": "Die beste Banane, die du jemals essen wirst! So knusprig wie noch nie!",
        "price": 2.99,
        "sale": false,
        "priceNoSale": 2.99,
        "imageSrc": "./static/banana.jfif",
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
            console.log(e.target.id);
            setCookie("stmx_cart_ids", getCookie("stmx_cart_ids") + String(e.target.id).replace("addtocart-", "") + ":");
            alert("Add product " + e.target.id + " to cart!");
        });
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