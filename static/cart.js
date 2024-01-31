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
        "imageSrc": "",
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

function displayProducts() {
    for (productItem in products) {
        let product = products[productItem];
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
                    <p class="price-text">Preis:&nbsp;<strong><p class="price-text price-text-sale" id="price-` + product.id + `">` + product.price + `€</p>&nbsp;<p class="price-text price-text-noSale" id="priceWithoutSale-` + product.id + `">(` + product.priceNoSale + `€)</p></strong></p>
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
                    <p class="price-text">Preis:&nbsp;<strong><p class="price-text" id="price-` + product.id + `">` + product.price + `€</p></strong></p>
                </div>
            </div>`.trim();
        }
        document.getElementById("cart-items-wrapper").appendChild(div);
    }
}

function updatePrice(price, elemID, isSale, priceNoSale) {
    let amount = document.getElementById("amount-" + elemID).value;
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
}

displayProducts();
refreshTotalPrice();