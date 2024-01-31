fetch("./static/products.json").then((res) => {
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
}).then((data) => {
    for (product in data) {
        let node = document.createElement("h1");
            node.nodeValue = product;
        console.log(node);
        document.getElementById("body").appendChild(node);
    }
});