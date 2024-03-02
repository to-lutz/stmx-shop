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

refreshTheme();
