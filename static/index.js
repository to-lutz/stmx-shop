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

// Light / Darkmode
if (getCookie("stmx_mode") == "1") { // Lightmode
    for (elem of document.querySelectorAll("#darkmode")) {
        elem.style.display = "none";
        elem.style.cursor = "default";
    }
    for (elem of document.querySelectorAll("*")) {
        elem.classList.add("light-mode");
    }
} else if (getCookie("stmx_mode") == ""){ // No mode set, default: dark mode
    setCookie("stmx_mode", "0", 365);
    for (elem of document.querySelectorAll("#lightmode")) {
        elem.style.display = "none";
        elem.style.cursor = "default";
    }
    for (elem of document.querySelectorAll("*")) {
        elem.classList.remove("light-mode");
    }
} else { // Darkmode
    for (elem of document.querySelectorAll("#lightmode")) {
        elem.style.display = "none";
        elem.style.cursor = "default";
    }
    for (elem of document.querySelectorAll("*")) {
        elem.classList.remove("light-mode");
    }
}

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
