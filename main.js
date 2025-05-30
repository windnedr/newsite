var mousex = 0
var mousey = 0

function mouse(event) {
    mousex = event.clientX;
    mousey = event.clientY;

    document.body.style = "background-position: " + mousex / 2 + "px " + mousey / 2 + "px;"
    document.getElementById("cursglow").style = "background-position: " + ((mousex / -2) - 0) + "px " + ((mousey / -2) - 0) + "px; top: " + (mousey - 150) + "; left: " + (mousex - 150)
    document.getElementById("curs").style = "top: " + (mousey - 283 / 2) + "px; left:" + (mousex - 283 / 2) + ";"
    // document.getElementById("center").style = "top: calc(50vh / 2 - 10px - " + (-mousey / 50) + "px); left: calc(50vh / 2 - 10px - " + (-mousex / 50) + "px)"
}

function home() {
    if (document.getElementById("center")){
        document.getElementById("center").remove()
    }

    var dv = document.createElement("div");
    dv.id = "center"
    dv.innerHTML = "Windnedr<br><br>"
    dv.innerHTML += "<a onclick='proj()'>Projects</a><br>"
    dv.innerHTML += "<a onclick='abt()'>About Site</a><br>"
    dv.innerHTML += "<a href='https://windnedr.github.io'>Visit Old Site</a><br>"
    document.body.appendChild(dv)
}

function abt() {
    if (document.getElementById("center")){
        document.getElementById("center").remove()
    }

    var dv = document.createElement("div");
    dv.id = "center"
    dv.innerHTML = "<img src='./assets/cowl.png' style='width: 100%;height: 40%;image-rendering: pixelated; object-fit: cover;padding-bottom: 8px;'> <br> About<br><br>Made in pure HTML, CSS, and Javascript"
    dv.innerHTML += "<br><br>Last updated: May 30, 2025"
    document.body.appendChild(dv)
}

function proj() {
    if (document.getElementById("center")){
        document.getElementById("center").remove()
    }

    var dv = document.createElement("div");
    dv.id = "center"
    dv.innerHTML = "Projects<br><br>"
    dv.innerHTML += "<a onclick='pom()'>POMR</a><br>"
    document.body.appendChild(dv)
}

function pom() {
    if (document.getElementById("center")){
        document.getElementById("center").remove()
    }

    var dv = document.createElement("div");
    dv.id = "center"
    dv.innerHTML = "<img src='./assets/thumbnails/POMR wind banner.png' style='width: 100%;height: 40%;aspect-ratio: 4 / 1 !important;image-rendering: pixelated; object-fit: cover;padding-bottom: 8px;'>"
    dv.innerHTML += "<br> POMR<br> <a href='https://pomr.org'>OPEN</a> <br><br>Made with Love and care! (also HTML, CSS, JS, and PHP) <br><hr>"
    dv.innerHTML += "Desc.<br>POMR is a FOSS streaming service with User Generated Content. <br><br>Currently, the only media types are Shows & Movies.<br>More media types might be added if there is user demand."
    document.body.appendChild(dv)
}

home()